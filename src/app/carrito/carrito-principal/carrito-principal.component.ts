import { Component } from '@angular/core';
import { ProductoCarritoModel } from '../../models/producto-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito-principal',
  imports: [CommonModule],
  templateUrl: './carrito-principal.component.html',
  styleUrl: './carrito-principal.component.css'
})
export class CarritoPrincipalComponent {
  productosCarrito: ProductoCarritoModel[] = [
    {
      id: 1,
      nombre: 'Producto 1',
      cantidad: 2
    },
    {
      id: 2,
      nombre: 'Producto 2',
      cantidad: 1
    },
    {
      id: 3,
      nombre: 'Producto 3',
      cantidad: 5
    }
  ];

  btnEliminarProducto(idProducto: number): void {
    // Lógica para eliminar el producto del carrito de compras
    console.log(`Eliminando producto con ID: ${idProducto}`);
    this.productosCarrito = this.productosCarrito.filter(producto => producto.id !== idProducto);
    console.log(`Producto con ID ${idProducto} eliminado del carrito.`);
  }
}
