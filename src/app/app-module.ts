import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';

import { HeroesList } from './heroes/heroes-list/heroes-list';
import { HeroesFilterPipe } from './heroes/heroes-filter.pipe';
import { OperasBas } from './formularios/operas-bas/operas-bas';
import { Areas } from './formularios/areas/areas';
import { Usuario } from './formularios/usuario/usuario';
import { Palindromo } from './formularios/palindromo/palindromo';
import { Distancias } from './formularios/distancias/distancias';

@NgModule({
  declarations: 
  [
    App, 
    HeroesList, 
    HeroesFilterPipe, 
    OperasBas, 
    Areas, 
    Usuario, 
    Palindromo, 
    Distancias
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
