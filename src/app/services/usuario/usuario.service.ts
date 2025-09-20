import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UsuarioModel } from '../../models/usuario-model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  AutenticarUsuario(email: string, password: string): Observable<number> {
    // Aquí iría la lógica para autenticar al usuario, por ejemplo, llamando a un servicio de backend.
    // Por ahora, retornamos true como si la autenticación fuera exitosa.
    console.log(`Autenticando usuario con email: ${email} y password: ${password}`);
    return of(1); // Simulación de autenticación exitosa
  }

  ObtenerUsuarioPorId(idUsuario: number): Observable<UsuarioModel> {
    // Aquí iría la lógica para obtener el usuario por su email, por ejemplo, llamando a un servicio de backend.
    // Por ahora, retornamos un objeto simulado.  
    const usuarioSimulado : UsuarioModel = {
      idUsuario: idUsuario,
      nombre: 'Juan',
      apellido: 'Pérez',
      email: 'juan.perez@upc.edu.pe'
    };
    return of(usuarioSimulado); // Simulación de obtención de usuario
  }
}
