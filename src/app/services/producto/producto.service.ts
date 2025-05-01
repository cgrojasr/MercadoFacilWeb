import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductoCatalogoModel } from '../../models/producto-model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: ProductoCatalogoModel[] = [
    { id: 1, nombre: 'Mayonesa Alacena 95g', imagen: '/images/mayonesa_alacena_95g.png' },
    { id: 2, nombre: 'Mayonesa Hellmanns 190g', imagen: '/images/mayonesa_hellmanns_190g.png'  },
    { id: 3, nombre: 'Producto 3' },
    { id: 4, nombre: 'Producto 4' },
    { id: 5, nombre: 'Producto 5' },
    { id: 6, nombre: 'Producto 6' },
    { id: 7, nombre: 'Producto 7' },
    { id: 8, nombre: 'Producto 8' },
    { id: 9, nombre: 'Producto 9' },
    { id: 10, nombre: 'Producto 10' }
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
