import { Component } from '@angular/core';

@Component({
  selector: 'app-areas',
  standalone: false,
  templateUrl: './areas.html',
})

export class Areas {

  num1: string = '';
  num2: string = '';
  resultado: number = 0;
  figura: string = '';

  calcular(): void 
  {
    if (this.figura === 'triangulo') 
    {
      this.resultado = (parseInt(this.num1) * parseInt(this.num2)) / 2;
    }

    if (this.figura === 'rectangulo') 
    {
      this.resultado = parseInt(this.num1) * parseInt(this.num2);
    }

    if (this.figura === 'circulo')
    {
      this.resultado = 3.1416 * (parseInt(this.num1) * parseInt(this.num1));
    }

    if (this.figura === 'pentagono') 
    {
      this.resultado = (parseInt(this.num1) * parseInt(this.num2)) / 2;
    }
  }
}