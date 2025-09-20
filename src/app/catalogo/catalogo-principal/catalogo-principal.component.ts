import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto/producto.service';
import { ProductoCatalogoModel } from '../../models/producto-model';
import { CatalogoItemComponent } from "../catalogo-item/catalogo-item.component";
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { ProductoCategoriaModel } from '../../models/producto-categoria-model';
import { ProductoCategoriaService } from '../../services/producto-categoria/producto-categoria.service';

@Component({
  selector: 'app-catalogo-principal',
  standalone: true, // Add this line for standalone components
  imports: [CatalogoItemComponent, SharedModule],
  templateUrl: './catalogo-principal.component.html',
  styleUrl: './catalogo-principal.component.css'
})
export class CatalogoPrincipalComponent implements OnInit {
  productos: ProductoCatalogoModel[] = [];
  categorias: ProductoCategoriaModel[] = []; // Cambiado a 'any' para evitar problemas de tipo
  nombreBuscar: string = '';
  
  constructor(
    private productoService: ProductoService,
    private productoCategoriaService: ProductoCategoriaService,
  ) {}

  ngOnInit() : void {
    this.productoService.getProductosCatalogo().subscribe(
      result => {
        this.productos = result;
      });

    this.productoCategoriaService.ListarCategorias().subscribe(
      result => {
        this.categorias = result;
      } 
    );
  }

  onSelectedCategoria(categoriaId: number) {
    console.log('Categoría seleccionada:', categoriaId);
    // Aquí puedes implementar la lógica para filtrar los productos por categoría
    this.productoService.getProductosCatalogo(categoriaId).subscribe(
      result => {
        this.productos = result;
      });
  }

  onClickBucar(nombreProducto: string) {
    console.log('Buscar productos');
    // Aquí puedes implementar la lógica para buscar productos
    this.productoService.getProductosCatalogo(undefined, nombreProducto).subscribe(
      result => {
        this.productos = result;
      });
  }
}
