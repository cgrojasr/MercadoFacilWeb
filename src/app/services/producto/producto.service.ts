import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductoCatalogoModel } from '../../models/producto-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: ProductoCatalogoModel[] = [
    { idProducto: 1, nombre: 'Mayonesa Alacena 95g', marca:"X", sku:"1111111", imagen: '/images/mayonesa_alacena_95g.png' },
    { idProducto: 1, nombre: 'Mayonesa Alacena 95g', marca:"X", sku:"1111111", imagen: '/images/mayonesa_alacena_95g.png' },
    { idProducto: 1, nombre: 'Mayonesa Alacena 95g', marca:"X", sku:"1111111", imagen: '/images/mayonesa_alacena_95g.png' }
  ]

  constructor(
    private http: HttpClient
  ) { }

  
  getProductosCatalogo(): Observable<ProductoCatalogoModel[]> {
    //return of(this.productos)
    // console.log('Llamando al servicio de productos');
    return this.http.get<ProductoCatalogoModel[]>('http://localhost:5171/api/Producto/GetProductosCatalogo');
  }
}
