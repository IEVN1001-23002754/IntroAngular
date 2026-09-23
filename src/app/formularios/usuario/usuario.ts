import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: false,
  templateUrl: './usuario.html'
})
export class Usuario 
{
  usuario_correcto: string = "admin";
  contrasena_correcta: string = "12345";

  usuario_ingresado: string = "";
  contrasena_ingresada: string = "";
  resultado: string = "";

  validarAcceso() 
  {
    if (this.usuario_ingresado !== this.usuario_correcto) 
    {
      this.resultado = "El nombre de usuario no es válido.";
    } 

    else if (this.contrasena_ingresada !== this.contrasena_correcta) 
    {
      this.resultado = "La contraseña no es válida.";
    } 

    else 
    {
      this.resultado = `¡Bienvenido al sistema, ${this.usuario_ingresado}!`;
    }
  }
}