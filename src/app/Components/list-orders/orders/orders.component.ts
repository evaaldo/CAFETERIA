import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  @Input() titulo: string = "Título do Pedido"
  @Input() dataEntrega: string = "28/07/2003"
  @Input() preco: string = "0,00"
}
