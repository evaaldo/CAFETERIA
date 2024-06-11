import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { ProductComponent } from './Components/product/product.component';
import { ContainerComponent } from './Components/container/container.component';
import { ContainerProductsComponent } from './Components/container-products/container-products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SidebarComponent,
    NavbarComponent,
    WelcomeComponent,
    ProductComponent,
    ContainerComponent,
    ContainerProductsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cafeteria';
}
