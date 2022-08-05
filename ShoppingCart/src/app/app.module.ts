import { NgModule, OnDestroy, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductGridViewComponent } from './pages/products/product-grid-view/product-grid-view.component';
import { HomeComponent } from './pages/home/home.component';

import { routes } from './app.routes';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RequestAServiceComponent } from './pages/request-aservice/request-aservice.component';
import { OurStoreComponent } from './pages/our-store/our-store.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { DetailsComponent } from './pages/products/details/details.component';
import { ProductsServices } from './services/products-services.service';
import { Observable, Subscription } from 'rxjs';
import { IProduct } from './interfaces/iproduct';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { CategoriesNavigatorComponent } from './pages/products/categories-navigator/categories-navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductGridViewComponent,
    HomeComponent,
    NotFoundComponent,
    RequestAServiceComponent,
    OurStoreComponent,
    ContactUsComponent,
    OurServicesComponent,
    DetailsComponent,
    CategoriesNavigatorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
