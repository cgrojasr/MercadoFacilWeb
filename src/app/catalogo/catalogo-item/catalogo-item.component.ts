import { Component, Input, OnInit } from '@angular/core';
import { ProductoCarritoModel, ProductoCatalogoModel } from '../../models/producto-model';
import { SharedModule } from '../../shared/shared.module';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-catalogo-item',
  imports: [SharedModule],
  templateUrl: './catalogo-item.component.html',
  styleUrl: './catalogo-item.component.css'
})
export class CatalogoItemComponent implements OnInit {
  @Input() producto_catalogo: ProductoCatalogoModel = {
    id: 0, // Identificador único del producto
    nombre: '', // Nombre del producto
  }; // Identificador único del producto

  producto_carrito: ProductoCarritoModel = {
    id: 0, // Identificador único del producto 
    nombre: '', // Nombre del producto
    cantidad: 0 // Cantidad del producto en el carrito
  };

  constructor(private cookieService: CookieService) {}

  ngOnInit() {
    // Inicialización del componente 
    this.producto_carrito.id = this.producto_catalogo.id;
    this.producto_carrito.nombre = this.producto_catalogo.nombre;
    this.producto_carrito.cantidad = 0; // Inicializar la cantidad a 1
  }

  btnAgregarAlCarrito():void {
    // Lógica para agregar el producto al carrito de compras
    let carrito: ProductoCarritoModel[] = [];

    carrito = this.cookieService.get('carrito') 
      ? JSON.parse(this.cookieService.get('carrito')) 
      : [];
    carrito = carrito.filter((item) => item.id !== this.producto_carrito.id); // Eliminar el producto si ya existe en el carrito
    carrito.push(this.producto_carrito);
    this.cookieService.set('carrito', JSON.stringify(carrito));

    console.log(carrito);
  }
}