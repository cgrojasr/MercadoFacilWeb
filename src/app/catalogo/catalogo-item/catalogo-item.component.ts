import { Component, Input } from '@angular/core';
import { ProductoCatalogoModel } from '../../models/producto-model';

@Component({
  selector: 'app-catalogo-item',
  imports: [],
  templateUrl: './catalogo-item.component.html',
  styleUrl: './catalogo-item.component.css'
})
export class CatalogoItemComponent {
  @Input() producto: ProductoCatalogoModel = {
    id: 0, // Identificador único del producto
    nombre: '', // Nombre del producto
    precio: 0, // Precio del producto
  }; // Identificador único del producto
}