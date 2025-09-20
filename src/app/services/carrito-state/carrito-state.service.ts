import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoStateService {
  private cantidadCarritoSubject = new BehaviorSubject<number>(0);
  cantidadCarrito$ = this.cantidadCarritoSubject.asObservable();

  constructor(
    private cookieService: CookieService
  ) { 
    this.cantidadCarritoSubject.next(this.cookieService.get('carrito') 
      ? JSON.parse(this.cookieService.get('carrito')).length 
      : 0);
  }

  setCantidadCarrito(cantidad: number) {
    this.cantidadCarritoSubject.next(cantidad);
  }
}
