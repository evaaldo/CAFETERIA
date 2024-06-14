import { Component } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductComponent } from './product/product.component';
import { ContainerProductsComponent } from './container-products/container-products.component';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [
    ContainerComponent,
    WelcomeComponent,
    ProductComponent,
    ContainerProductsComponent
  ],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {

}
