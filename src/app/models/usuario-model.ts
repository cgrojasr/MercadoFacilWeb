export interface UsuarioModel {
  idUsuario: number; // Identificador único del usuario
  nombre: string; // Nombre del usuario
  apellido: string; // Apellido del usuario
  email: string; // Correo electrónico del usuario
}

export interface UsuarioLoginModel {
  email: string; // Correo electrónico del usuario
  password: string; // Contraseña del usuario
}