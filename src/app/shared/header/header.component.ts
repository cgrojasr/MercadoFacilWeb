import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalLoginComponent } from "../modal-login/modal-login.component";
import { ModalCarritoComponent } from "../modal-carrito/modal-carrito.component";
import { CookieService } from 'ngx-cookie-service';
import { stringify } from 'querystring';
import { CarritoStateService } from '../../services/carrito-state/carrito-state.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule, ModalLoginComponent, ModalCarritoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  cantidad_carrito: number = 0;

  /**
   *
   */
  constructor(
    private carritoState: CarritoStateService,
    private cookieService: CookieService
  ){
    // this.cantidad_carrito = this.cookieService.get('carrito') 
    //   ? JSON.parse(this.cookieService.get('carrito')).length 
    //   : 0;

    //   console.log(this.cantidad_carrito);
  }

  ngOnInit() {
    // Inicializar la cantidad del carrito desde el servicio
    this.carritoState.cantidadCarrito$.subscribe(cantidad => {
      this.cantidad_carrito = cantidad;
    });
  }
}
