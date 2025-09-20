import { Component, Input, OnInit } from '@angular/core';
import { ProductoCarritoModel, ProductoCatalogoModel } from '../../models/producto-model';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from "../../shared/pipes/truncate/truncate.pipe";
import { CarritoStateService } from '../../services/carrito-state/carrito-state.service';

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

  carrito: ProductoCarritoModel[] = [];
  constructor(
    private cookieService: CookieService,
  private carritoState: CarritoStateService
  ) {}

  ngOnInit() {
    // Verificar si el producto ya está en el carrito
    this.carrito = this.cookieService.get('carrito') 
      ? JSON.parse(this.cookieService.get('carrito')) 
      : [];
    const productoExistente = this.carrito.find(item => item.id === this.productoCatalogo.idProducto);

    // Inicialización del componente 
    this.producto_carrito.id = this.productoCatalogo.idProducto;
    this.producto_carrito.nombre = this.productoCatalogo.nombre;
    if (productoExistente) {
      this.producto_carrito.cantidad = productoExistente.cantidad; // Si ya existe, usar los datos del carrito
    }
  }

  btnAgregarAlCarrito():void {
    // Lógica para agregar el producto al carrito de compras
    //let carrito: ProductoCarritoModel[] = [];

    this.carrito = this.cookieService.get('carrito') 
      ? JSON.parse(this.cookieService.get('carrito')) 
      : [];
    this.carrito = this.carrito.filter((item) => item.id !== this.producto_carrito.id); // Eliminar el producto si ya existe en el carrito
    this.carrito.push(this.producto_carrito);
    this.cookieService.set('carrito', JSON.stringify(this.carrito));
    this.carritoState.setCantidadCarrito(this.carrito.length);
  }
}