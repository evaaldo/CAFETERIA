import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { WelcomeComponent } from './Components/list-products/welcome/welcome.component';
import { ProductComponent } from './Components/list-products/product/product.component';
import { ContainerComponent } from './Components/container/container.component';
import { ContainerProductsComponent } from './Components/list-products/container-products/container-products.component';
import { FooterComponent } from './Components/footer/footer.component';

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
    ContainerProductsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cafeteria';
}
