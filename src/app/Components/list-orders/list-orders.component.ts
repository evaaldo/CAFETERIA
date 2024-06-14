import { Component } from '@angular/core';

import { ContainerComponent } from '../container/container.component';
import { OrdersComponent } from './orders/orders.component';
import { HeaderOrdersComponent } from './header-orders/header-orders.component';

@Component({
  selector: 'app-list-orders',
  standalone: true,
  imports: [
    ContainerComponent,
    OrdersComponent,
    HeaderOrdersComponent
  ],
  templateUrl: './list-orders.component.html',
  styleUrl: './list-orders.component.css'
})
export class ListOrdersComponent {

}
