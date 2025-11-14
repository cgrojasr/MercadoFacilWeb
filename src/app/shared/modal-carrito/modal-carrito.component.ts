import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ProductoCarritoModel } from '../../models/producto-model';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { CarritoStateService } from '../../services/carrito-state/carrito-state.service';
import { CarritoItemComponent } from "../../carrito/carrito-item/carrito-item.component";

@Component({
  selector: 'app-modal-carrito',
  imports: [
    CommonModule,
    CarritoItemComponent
],
  templateUrl: './modal-carrito.component.html',
  styleUrl: './modal-carrito.component.css'
})
export class ModalCarritoComponent implements OnInit, AfterViewInit {
  isOpen = true;
  carrito: ProductoCarritoModel[] = [];
  private modalElement!: HTMLElement | null;
  private subs = new Subscription();
  private showHandler?: () => void;

  constructor(
    private cookieService: CookieService,
    private elementRef: ElementRef,
    private carritoState: CarritoStateService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Cargar al iniciar
    this.cargarCarrito();

    // Refrescar cuando cambie el estado (por ejemplo, al agregar desde catálogo)
    this.subs.add(
      this.carritoState.cantidadCarrito$.subscribe(() => {
        this.cargarCarrito();
        this.cdr.detectChanges();
      })
    );
  }

  ngAfterViewInit(): void {
    // Refrescar cada vez que el modal se vaya a mostrar
    this.modalElement = this.elementRef.nativeElement.querySelector('#carritoModal');
    if (this.modalElement) {
      this.showHandler = () => {
        this.cargarCarrito();
        this.cdr.detectChanges();
      };
      this.modalElement.addEventListener('show.bs.modal', this.showHandler);
    }
  }

  cargarCarrito(): void {
    const carritoJson = this.cookieService.get('carrito');
    this.carrito = carritoJson ? JSON.parse(carritoJson) : [];
  }

  close_OnClick(): void {
    this.isOpen = false;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    if (this.modalElement && this.showHandler) {
      this.modalElement.removeEventListener('show.bs.modal', this.showHandler);
    }
  }
}
