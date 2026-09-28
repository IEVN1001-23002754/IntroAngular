import { Component } from '@angular/core';

@Component
({
  selector: 'app-distancias',
  standalone: false,
  templateUrl: './distancias.html',
})

export class Distancias 
{
  num1: string = '';
  num2: string = '';
  num3: string = '';
  num4: string = '';
  resultado: number = 0; // Almacena el resultado final
 
  // funcion que se ejecuta para realizar el calculo
  distancia(): void {
    // Utiliza la formula de distancia: sqrt((x2 - x1)^2 + (y2 - y1)^2)
    // Se usa parseInt para convertir los textos de los inputs a numeros enteros
    this.resultado = Math.sqrt(
      ((parseInt(this.num3) - parseInt(this.num1)) ** 2) + ((parseInt(this.num4) - parseInt(this.num2)) ** 2)
    );
  }
}