import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductoCarritoModel } from '../../models/producto-model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-carrito-item',
  imports: [],
  templateUrl: './carrito-item.component.html',
  styleUrl: './carrito-item.component.css'
})
export class CarritoItemComponent {
  @Input() producto: ProductoCarritoModel = {
    id: 0,
    nombre: '',
    cantidad: 0
  };

  carrito: ProductoCarritoModel[] = [];

  @Output() eliminarProductoEvent =  new EventEmitter<number>()

  constructor(
    private cookieService: CookieService
  ) {
    // Inicialización si es necesario
  }

  btnEliminarProducto(idProducto: number): void {
    // Lógica para eliminar el producto del carrito de compras
    //this.productosCarrito = this.productosCarrito.filter(producto => producto.id !== idProducto);

    // Emitir el evento para eliminar el producto
    // this.eliminarProductoEvent.emit(idProducto);

    this.carrito = JSON.parse(this.cookieService.get('carrito') || '[]');
    this.carrito = this.carrito.filter(producto => producto.id !== idProducto);
    console.log('Carrito actualizado:', this.carrito);
    this.cookieService.set('carrito', JSON.stringify(this.carrito));
    this.eliminarProductoEvent.emit(idProducto);
  }
}
