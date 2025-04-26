import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductoCatalogoModel } from '../../models/producto-model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: ProductoCatalogoModel[] = [
    { id: 1, nombre: 'Producto 1', precio: 100},
    { id: 2, nombre: 'Producto 2', precio: 200 },
    { id: 3, nombre: 'Producto 3', precio: 300 },
    { id: 4, nombre: 'Producto 4', precio: 400 },
    { id: 5, nombre: 'Producto 5', precio: 500 },
    { id: 6, nombre: 'Producto 6', precio: 600 },
    { id: 7, nombre: 'Producto 7', precio: 700 },
    { id: 8, nombre: 'Producto 8', precio: 800 },
    { id: 9, nombre: 'Producto 9', precio: 900 },
    { id: 10, nombre: 'Producto 10', precio: 1000 }
  ]

  constructor() { }

  getProductosCatalogo(): Observable<ProductoCatalogoModel[]> {
    //const response = await fetch('https://api.example.com/productos');
    // if (!response.ok) {
    //   throw new Error('Error al obtener los productos');
    // }
    return of(this.productos)
  }
}
