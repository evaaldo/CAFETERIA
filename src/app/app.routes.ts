import { Routes } from '@angular/router';
import { ListProductsComponent } from './Components/list-products/list-products.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "list-products",
    pathMatch: "full"
  },
  {
    path: "list-products",
    component: ListProductsComponent
  }
];
