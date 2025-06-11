import { Component, Input, OnInit } from '@angular/core';
import { ProductoCarritoModel, ProductoCatalogoModel } from '../../models/producto-model';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from "../../shared/pipes/truncate/truncate.pipe";

@Component({
  selector: 'app-catalogo-item',
  imports: [FormsModule, TruncatePipe],
  templateUrl: './catalogo-item.component.html',
  styleUrl: './catalogo-item.component.css'
})
export class CatalogoItemComponent implements OnInit {
  @Input() productoCatalogo: ProductoCatalogoModel = {
    idProducto: 0, // Identificador único del producto
    sku: '', // SKU del producto
    nombre: '', // Nombre del producto
    marca: '', // Marca del producto
  }; // Identificador único del producto

  producto_carrito: ProductoCarritoModel = {
    id: 0, // Identificador único del producto 
    nombre: '', // Nombre del producto
    cantidad: 0 // Cantidad del producto en el carrito
  };

  constructor(
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    // Inicialización del componente 
    this.producto_carrito.id = this.productoCatalogo.idProducto;
    this.producto_carrito.nombre = this.productoCatalogo.nombre;
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