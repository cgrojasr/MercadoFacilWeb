import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
//librerias para enrutar la aplicacion
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { enableProdMode } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

// Para consumir servicios http debemos agregar el provideHttpClient
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient()]
}).catch((err) => console.error(err));
