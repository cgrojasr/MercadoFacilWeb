import { Component } from '@angular/core';
import { UsuarioLoginModel, UsuarioModel } from '../../models/usuario-model';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { CookieService } from 'ngx-cookie-service';
import { SharedModule } from '../shared.module';

@Component({
  selector: 'app-modal-login',
  imports: [SharedModule],
  templateUrl: './modal-login.component.html',
  styleUrl: './modal-login.component.css'
})
export class ModalLoginComponent {
  usuarioLoginModel: UsuarioLoginModel = {
    email: '', // Correo electrónico del usuario
    password: '' // Contraseña del usuario
  };

  usuarioModel: UsuarioModel = {
    idUsuario: 0, // Identificador único del usuario
    nombre: '', // Nombre del usuario
    apellido: '', // Apellido del usuario
    email: '' // Correo electrónico del usuario
  };

  constructor(
    private usuarioService: UsuarioService, // Aquí deberías inyectar tu servicio de usuario
    private cookieService: CookieService // Si necesitas manejar cookies
  ) { }

  btnLogin(): void {
    // Aquí puedes implementar la lógica de inicio de sesión
    console.log('Usuario:', this.usuarioLoginModel.email);
    console.log('Contraseña:', this.usuarioLoginModel.password);
    // Por ejemplo, llamar a un servicio de autenticación
    this.usuarioService.AutenticarUsuario(this.usuarioLoginModel.email, this.usuarioLoginModel.password)
      .subscribe(idUsuario => {
        if (idUsuario > 0) {
          console.log('Usuario autenticado con ID:', idUsuario);
          // Aquí podrías redirigir al usuario a otra página o mostrar un mensaje de éxito
          this.usuarioService.ObtenerUsuarioPorId(idUsuario).subscribe(usuario => {
            console.log('Datos del usuario:', usuario);
            // Aquí podrías guardar los datos del usuario en un servicio o en el estado de la aplicación
            this.usuarioModel = usuario; // Guardar los datos del usuario autenticado
            this.cookieService.set('usuario', JSON.stringify(this.usuarioModel), 1); // Guardar el usuario en una cookie con 1 día de expiración
          });
        }
        else {
          console.error('Error al autenticar al usuario');
          // Aquí podrías mostrar un mensaje de error al usuario
        }
      }, error => {
        console.error('Error en la autenticación:', error);
        // Aquí podrías mostrar un mensaje de error al usuario
      }
    );
  }
}
