import { Routes } from "@angular/router";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";
import { HomeComponent } from "./pages/home/home.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { OurServicesComponent } from "./pages/our-services/our-services.component";
import { OurStoreComponent } from "./pages/our-store/our-store.component";
import { DetailsComponent } from "./pages/products/details/details.component";
import { ProductsComponent } from "./pages/products/products.component";
import { RequestAServiceComponent } from "./pages/request-aservice/request-aservice.component";

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'products',
    children: [
      { path: '', component: ProductsComponent },
      { path: ':id', component: DetailsComponent }
      ]
  },
  {
    path: 'services',
    children: [
      { path: '', component: OurServicesComponent },
      { path: 'requestaservice', component: RequestAServiceComponent },
      { path: 'ourstores', component: OurStoreComponent },
      { path: 'contactus', component: ContactUsComponent },
    ]
  },
  { path: '**', component: NotFoundComponent }
]
