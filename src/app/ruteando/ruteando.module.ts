import { JuegoPiedraPapelTijera } from './../clases/juego-piedra-papel-tijera';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importo del module principal
import { RouterModule, Routes } from '@angular/router';
import { AdivinaElNumeroComponent } from '../componentes/adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadosComponent } from '../componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from '../componentes/login/login.component';
import { ErrorComponent } from '../componentes/error/error.component';
import { PrincipalComponent } from '../componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from '../componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from '../componentes/menu/menu.component';
import { AdivinaMasListadoComponent } from '../componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadMasListadoComponent } from '../componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { ListadoComponent } from'../componentes/listado/listado.component'
import { ListadosComponent } from '../componentes/listados/listados.component';
import { JuegosComponent } from '../componentes/juegos/juegos.component';
import { RegistroComponent } from '../componentes/registro/registro.component';
import { MenuCardComponent } from '../componentes/menu-card/menu-card.component';
import { CabeceraComponent } from '../componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from '../componentes/quien-soy/quien-soy.component'
//import { ListadoDePaisesComponent } from '../componentes/listado-de-paises/listado-de-paises.component'
//import { MapaDeGoogleComponent } from '../componentes/mapa-de-google/mapa-de-google.component'
import { JugadoresListadoComponent } from '../componentes/jugadores-listado/jugadores-listado.component';
import {PiedraPapelTijeraComponent } from '../componentes/piedra-papel-tijera/piedra-papel-tijera.component';

import { PaisesComponent } from '../componentes/paises/paises.component';
// import { AnimalesComponent } from '../componentes/animales/animales.component';
import { MemotecComponent } from '../componentes/memotec/memotec.component';
import { TatetiComponent } from '../componentes/tateti/tateti.component';
import { AnagramaComponent } from '../componentes/anagrama/anagrama.component';


// declaro donde quiero que se dirija
const MiRuteo = [        
      {path: '' , component: LoginComponent},
      {path: 'Principal' , component: PrincipalComponent},
      {path: 'Jugadores' , component: JugadoresListadoComponent},
      {path: 'Login' , component: LoginComponent},
      {path: 'QuienSoy' , component: QuienSoyComponent},
      {path: 'Registro' , component: RegistroComponent},
      {path: 'Principal' , component: PrincipalComponent},
      {path: 'Resultados' , component: ListadoComponent},
      {path: 'Paises' , component: PaisesComponent},
      {path: 'Memotec' , component: MemotecComponent},
      //{path: '' , component: PrincipalComponent},     
      //{path: 'Paises' , component: ListadoDePaisesComponent},
      //{path: 'Mapa' , component: MapaDeGoogleComponent},

{ path: 'Juegos' ,
component: JuegosComponent ,
children:
     [{path: '' , component: MenuCardComponent},
      {path: 'Adivina' , component: AdivinaElNumeroComponent},
      {path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
      {path: 'PiedraPapelTijera' , component: PiedraPapelTijeraComponent},
      {path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
      {path: 'Memotec' , component: MemotecComponent},
      {path: 'Anagrama' , component: AnagramaComponent},
      {path: 'Tateti' , component: TatetiComponent},
      {path: 'Listado' , component: ListadoComponent},
      {path: 'Agilidad' , component: AgilidadAritmeticaComponent}]
},
{path: '**' , component: ErrorComponent},
{path: 'error' , component: ErrorComponent}];

@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo)
  ],
  exports: [
    RouterModule
  ]
})
export class RuteandoModule { }
