import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() titulo: string = "Título do Produto";
  @Input() preco: string = "0.00";
  @Input() urlImagem: string = "../../../assets/imagens/coffee-icon-vector.jpg";
}
