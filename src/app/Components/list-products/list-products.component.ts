import { Component } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductComponent } from './product/product.component';
import { ContainerProductsComponent } from './container-products/container-products.component';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number,
  titulo: string,
  preco: string,
  urlImagem: string
}

import products from './products.json'

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [
    ContainerComponent,
    WelcomeComponent,
    ProductComponent,
    ContainerProductsComponent,
    FormsModule
  ],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})

export class ListProductsComponent {
  productsList: Product[] = products;
  filterByText: string = "";
  alphabet: string = "abcdefghijklmnopqrstuvwxyz"
  filteredProducts: Product[] = this.productsList;

  filterProductsByText(): Product[] {
    if (!this.filterByText) {
      return this.productsList;
    }
    return this.productsList.filter(product => {
      return product.titulo.toLowerCase().includes(this.filterByText.toLowerCase());
    })
  }

  filterProductsByInitialLetter(letter: string): Product[] {
    return this.filterProductsByText().filter(product => {
      return product.titulo.toLowerCase().startsWith(letter);
    })
  }
}
