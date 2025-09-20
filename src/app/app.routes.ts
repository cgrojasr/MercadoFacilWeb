import { Routes } from '@angular/router';
import { CarritoPrincipalComponent } from './carrito/carrito-principal/carrito-principal.component';
import { CatalogoPrincipalComponent } from './catalogo/catalogo-principal/catalogo-principal.component';
import { DemoComponent } from './demo/demo.component';

export const routes: Routes = [
    {
        path: '', // Ruta raíz
        component: CatalogoPrincipalComponent, // Componente que se mostrará en la ruta raíz
        title: 'MercadoFacil - Catalogo de productos' // Título de la página
    },
    {
        path: 'carrito', // Ruta raíz
        component: CarritoPrincipalComponent, // Componente que se mostrará en la ruta raíz
        title: 'MercadoFacil - Carrito de compras' // Título de la página
    },
    {
        path: 'demo', // Ruta raíz
        component: DemoComponent, // Componente que se mostrará en la ruta raíz
        title: 'MercadoFacil - Demo' // Título de la página
    },
];
