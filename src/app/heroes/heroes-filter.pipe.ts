import { Pipe, PipeTransform } from '@angular/core';
import { IHeroes } from './heroes';

@Pipe
({
  name: 'heroesFilter', // Nombre en HTML con el simbolo de tuberia |
  standalone: false,
})

export class HeroesFilterPipe implements PipeTransform 
{
  // metodo que transforma los datos originales en datos filtrados
  transform(value: IHeroes[], args: string): IHeroes[] 
  {
    // Si la lista esta vacia, regresa la lista completa sin cambios
    if (!value || !args) 
    {
      return value;
    }

    // Pasa el texto de busqueda a minusculas 
    const filter = args.toLocaleLowerCase();

    // Filtra el arreglo original evaluando si el nombre incluye el texto buscado
    return value.filter((hero: IHeroes) => 
      hero.nombre.toLocaleLowerCase().includes(filter)
    );
  }
}