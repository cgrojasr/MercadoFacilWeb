import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto/producto.service';
import { ProductoCatalogoModel } from '../../models/producto-model';
import { CatalogoItemComponent } from "../catalogo-item/catalogo-item.component";
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-catalogo-principal',
  standalone: true, // Add this line for standalone components
  imports: [CatalogoItemComponent, SharedModule],
  templateUrl: './catalogo-principal.component.html',
  styleUrl: './catalogo-principal.component.css'
})
export class CatalogoPrincipalComponent implements OnInit {
  productos: ProductoCatalogoModel[] = [];
  
  constructor(
    private productoService: ProductoService
  ) {}

  ngOnInit() : void {
    this.productoService.getProductosCatalogo().subscribe(
      result => {
        this.productos = result;
        console.log(this.productos);
      });
  }
}
