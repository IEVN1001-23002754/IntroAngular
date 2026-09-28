import { Component } from '@angular/core';
import { IHeroes } from '../heroes';
 
@Component
({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.html',
})

export class HeroesList 
{
  // Propiedades de estilo y control de interfaz
  imageWidth: number = 40;      // Ancho de la imagen en px
  imageMargin: number = 2;      // Margen de la imagen
  muestraImage: boolean = true; // Mostrar u ocultar la imagen
  listFilter: string = '';      // Texto escrito por el usuario en tiempo real para filtrar
 
  // Funcion que alterna el valor para ocultar/mostrar imagenes
  showImage(): void 
  {
    this.muestraImage = !this.muestraImage;
  }
 
  // Arreglo de datos tipado con la interfaz IHeroes que contiene la informacion inicial
  heroes: IHeroes[] = [
    {
      imagen: 'https://dragonball-api.com/characters/goku_normal.webp',
      nombre: 'Goku',
      description: 'Kame Hame Ha. El protagonista de la serie...',
      race: 'Saiyan',
      ki: 60000000
    },
    {
      imagen: 'https://dragonball-api.com/characters/vegeta_normal.webp',
      nombre: 'Vegeta',
      description: 'Príncipe de los Saiyans, inicialmente un villano...',
      race: 'Saiyan',
      ki: 54000000
    },
    {
      imagen: 'https://dragonball-api.com/characters/picolo_normal.webp',
      nombre: 'Picolo',
      description: 'Es un namekiano que surgió tras ser creado...',
      race: 'Namekian',
      ki: 2000000
    },
    {
      imagen: 'https://dragonball-api.com/characters/bulma.webp',
      nombre: 'Bulma',
      description: 'Bulma es la protagonista femenina...',
      race: 'Human',
      ki: 0
    }
  ];
}