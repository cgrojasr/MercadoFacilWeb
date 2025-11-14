import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from './shared/footer/footer.component';
import { ModalCarritoComponent } from "./shared/modal-carrito/modal-carrito.component";
import { ModalLoginComponent } from "./shared/modal-login/modal-login.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    RouterModule,
    ModalCarritoComponent,
    ModalLoginComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MercadoFacilWeb';
}
