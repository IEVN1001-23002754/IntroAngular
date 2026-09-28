import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  styleUrl: './palindromo.css',
  templateUrl: './palindromo.html',
})
export class Palindromo 
{
  frase: string = ''; // Aquí se guardará lo que escriba el usuario
  resultadoVocales: string = '';
  resultadoConsonantes: string = '';
  resultadoPalindromo: string = '';

  analizarFrase(): void 
  {
    let vocales = '';
    let consonantes = '';
    let numVocales = 0;
    let numConsonantes = 0;
    let limpia = '';

    for (const letra of this.frase) 
    {
      // 1. Identificar vocales
      if (
        letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u' ||
        letra === 'á' || letra === 'é' || letra === 'í' || letra === 'ó' || letra === 'ú' ||
        letra === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === 'U' ||
        letra === 'Á' || letra === 'É' || letra === 'Í' || letra === 'Ó' || letra === 'Ú'
      ) 
      {
        vocales += letra;
        numVocales++;
      } 
      // 2. Ignorar espacios
      else if (letra === ' ') 
      {
        // No hace nada
      } 
      // 3. Identificar consonantes (letras que no son vocales ni espacios)
      else if (
        (letra >= 'b' && letra <= 'z') || (letra >= 'B' && letra <= 'Z') ||
        letra === 'ñ' || letra === 'Ñ'
      ) 
      {
        consonantes += letra;
        numConsonantes++;
      }

      // Construcción de la cadena limpia para el palíndromo
      if (letra !== ' ') 
      {
        if (letra === 'A' || letra === 'Á') limpia += 'a';
        else if (letra === 'E' || letra === 'É') limpia += 'e';
        else if (letra === 'I' || letra === 'Í') limpia += 'i';
        else if (letra === 'O' || letra === 'Ó') limpia += 'o';
        else if (letra === 'U' || letra === 'Ú') limpia += 'u';
        else if (letra === 'Ñ') limpia += 'ñ';
        // Conversión manual básica de consonantes mayúsculas a minúsculas por rango ASCII
        else if (letra >= 'B' && letra <= 'Z') 
        {
          limpia += String.fromCharCode(letra.charCodeAt(0) + 32);
        } 
        else 
        {
          limpia += letra;
        }
      }
    }

    // Resultados finales
    this.resultadoVocales = numVocales + ' vocales: ' + vocales;
    this.resultadoConsonantes = numConsonantes + ' consonantes: ' + consonantes;

    // Invertir la cadena para comprobar
    let invertida = '';
    for (const letra of limpia) 
    {
      invertida = letra + invertida;
    }

    if (invertida === limpia) 
    {
      this.resultadoPalindromo = 'Sí es palíndromo';
    } 
    else 
    {
      this.resultadoPalindromo = 'No es palíndromo';
    }
  }
}