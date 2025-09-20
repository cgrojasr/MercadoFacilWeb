import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoCategoriaModel } from '../../models/producto-categoria-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoCategoriaService {

  constructor(
    private http: HttpClient
  ) { }

  ListarCategorias(): Observable<ProductoCategoriaModel[]> {
    return this.http.get<ProductoCategoriaModel[]>('http://localhost:5171/api/ProductoCategoria');
  }
}
