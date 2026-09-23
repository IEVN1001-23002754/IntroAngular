import { Component } from '@angular/core';
 
@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.html',
})
export class OperasBas {
 
/*   num1:string=''
  num2:string=''
  resultado:number=0
 
sumar():void{
  this.resultado=parseInt(this.num1)+parseInt(this.num2)
}
 
restar():void{
  this.resultado=parseInt(this.num1)-parseInt(this.num2)
}
 
division():void{
  this.resultado=parseInt(this.num1)/parseInt(this.num2)
}
 
multiplicacion():void{
  this.resultado=parseInt(this.num1)*parseInt(this.num2)
} */
 
 
 
  num1:string = '';
  num2:string = '';
  resultado:number = 0;
  operacion:string = '';
 
  calcular():void {
 
    let numero1 = parseInt(this.num1);
    let numero2 = parseInt(this.num2);
 
    if (this.operacion === 'sumar') {
      this.resultado = numero1 + numero2;
    }
 
    if (this.operacion === 'restar') {
      this.resultado = numero1 - numero2;
    }
 
    if (this.operacion === 'division') {
      this.resultado = numero1 / numero2;
    }
 
    if (this.operacion === 'multiplicacion') {
      this.resultado = numero1 * numero2;
    }
 
  }
}