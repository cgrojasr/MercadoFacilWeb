import { Component, OnInit } from '@angular/core';
import { ProductoCarritoModel } from '../../models/producto-model';
import { CommonModule } from '@angular/common';
import { CarritoItemComponent } from "../carrito-item/carrito-item.component";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-carrito-principal',
  imports: [CommonModule, CarritoItemComponent],
  templateUrl: './carrito-principal.component.html',
  styleUrl: './carrito-principal.component.css'
})
export class CarritoPrincipalComponent implements OnInit {
  carrito: ProductoCarritoModel[] = [
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

  /**
   *
   */
  constructor(
    private cookieService: CookieService
  ) {
    //  cookieService.set('carrito', JSON.stringify(this.carrito));
  }

  ngOnInit(): void {
    this.carrito = JSON.parse(this.cookieService.get('carrito') || '[]');
    console.log(JSON.parse(this.cookieService.get('carrito') || '[]'));
  }

  eliminarProducto(idProducto: number): void {
  //   // Lógica para eliminar el producto del carrito de compras
  //   this.productosCarrito = this.productosCarrito.filter(producto => producto.id !== idProducto);
  console.log('Eliminando producto con ID:', idProducto);
  this.carrito = JSON.parse(this.cookieService.get('carrito') || '[]');
  }
}
