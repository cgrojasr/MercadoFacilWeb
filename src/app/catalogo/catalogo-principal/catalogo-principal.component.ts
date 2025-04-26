import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto/producto.service';
import { ProductoCatalogoModel } from '../../models/producto-model';
import { CarritoItemComponent } from "../../carrito/carrito-item/carrito-item.component";
import { CatalogoItemComponent } from "../catalogo-item/catalogo-item.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalogo-principal',
  standalone: true, // Add this line for standalone components
  imports: [CatalogoItemComponent, CommonModule],
  templateUrl: './catalogo-principal.component.html',
  styleUrl: './catalogo-principal.component.css'
})
export class CatalogoPrincipalComponent  {
  productos: ProductoCatalogoModel[] = [];
  
  constructor(
    private productoService: ProductoService
  ) {}

  ngOnInit() {
    this.productoService.getProductosCatalogo().subscribe(
      (data) => {
        this.productos = data;
        console.log(this.productos);
      });
  }
}
