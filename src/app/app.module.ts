import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { RouterModule, Routes} from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductaddComponent } from './productadd/productadd.component';
//import { AlertModule } from 'ngx-bootstrap';

const appRoutes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'mainpage', component: MainpageComponent },
  { path: 'productlist', component: ProductlistComponent },
  { path: 'productadd', component: ProductaddComponent },
  { path: 'productadd/:id', component: ProductaddComponent },
  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainpageComponent,
    ProductlistComponent,
    ProductaddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}