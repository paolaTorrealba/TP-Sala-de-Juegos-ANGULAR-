import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {JuegoPiedraPapelTijera} from '../../clases/juego-piedra-papel-tijera'

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {
  @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();

  nuevoJuego : JuegoPiedraPapelTijera;
  elecccionJugador:number =0
  eleccionMalo:number =0;
  audio = new Audio();
  Mensajes:string;
  puntos:number = 0;
  puntosRival:number = 0;
  botonComenzarVerificar:boolean =true;
  mostrarGif:boolean =true;
  labelPuntos:boolean = false;
  labelGanaste:boolean =false;
  labelPerdiste:boolean =false;


  arrayResultados : Array<any>;
  jugador = JSON.parse(localStorage.getItem("Id"));
  intentos: number;

  constructor() { 
 
    this.nuevoJuego = new JuegoPiedraPapelTijera("Piedra, Papel o Tijera",false,this.jugador,0,"0");
    this.arrayResultados = JSON.parse(this.jugador);
    this.intentos = 0;
    this.nuevoJuego.resultado=null;
    console.info(this.arrayResultados);
    }
  
  
  
    primerJuego(){
      this.nuevoJuego = new JuegoPiedraPapelTijera();
      this.botonComenzarVerificar = false;
      let botonPiedra:any = document.getElementById("botonPiedra");
      let botonPapel:any = document.getElementById("botonPapel");
      let botonTijera:any = document.getElementById("botonTijera");
      
      botonPiedra.disabled =false;
      botonPapel.disabled =false;
      botonTijera.disabled =false;
    }

    generarPartida(eleccionAux:number) { 
      let botonPiedra:any = document.getElementById("botonPiedra");
      let botonPapel:any = document.getElementById("botonPapel");
      let botonTijera:any = document.getElementById("botonTijera");
      
      botonPiedra.disabled =true;
      botonPapel.disabled =true;
      botonTijera.disabled =true;  
    
  
      setTimeout( () => {
        this.botonComenzarVerificar = false;
        this.labelPuntos = true;
        this.labelGanaste =false;
        this.labelPerdiste =false;
        this.nuevoJuego.asignarPPT(eleccionAux);
        this.elecccionJugador = eleccionAux;
        this.eleccionMalo = this.nuevoJuego.eleccionRandom;
        this.nuevoJuego.verificar();
        this.resultados();
      }, 1000 );  
    }
     

    resultados(){
   
      if (this.nuevoJuego.verificar() ==null) {
        this.MostarMensaje("Empate!!!",null);
      }
      if (this.nuevoJuego.verificar() ==true) {
        this.puntos ++;
        if (this.puntos == 3) {
          this.nuevoJuego.gano =true;
          this.nuevoJuego.jugador=sessionStorage.getItem('user');
          this.enviarJuego.emit(this.nuevoJuego);
          this.botonComenzarVerificar = false;
          this.labelGanaste =true;
          this.labelPuntos = false;
          this.puntosRival =0;
          this.puntos=0;
          this.nuevoJuego = new JuegoPiedraPapelTijera();
        }
   
        this.MostarMensaje("Ganaste!!! +1",true);
      }
      if (this.nuevoJuego.verificar() ==false) {
        this.puntosRival ++;
        if (this.puntosRival == 3) {
          this.nuevoJuego.gano =false;
          this.enviarJuego.emit(this.nuevoJuego);
          this.botonComenzarVerificar = false;
          this.labelPerdiste =true;
          this.labelPuntos = false;
          this.puntosRival =0;
          this.puntos=0;
          this.nuevoJuego = new JuegoPiedraPapelTijera();
          
        }
   
        this.MostarMensaje("Perdiste!!! -1",false);
      }
  
    }
  
    MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean) {
      this.Mensajes=mensaje;
      this.mostrarGif = false;    
  
      let errorEmail = document.getElementById("msjPuntos");
      let resultado1:any = document.getElementById("resultado1");
      let resultado2:any = document.getElementById("resultado2");
  
      let botonPiedra:any = document.getElementById("botonPiedra");
      let botonPapel:any = document.getElementById("botonPapel");
      let botonTijera:any = document.getElementById("botonTijera");
      
      botonPiedra.disabled =true;
      botonPapel.disabled =true;
      botonTijera.disabled =true;
    
  
      if(ganador==true){
          errorEmail.innerHTML = (`<h1 id='msjPuntos'><p class='resultados'>${mensaje} <i class="far fa-smile"></i> </p></h1>`);
          resultado1.src = `./assets/PPT/img/a${this.elecccionJugador}.png`;
          resultado2.src = `./assets/PPT/img/m${this.eleccionMalo}.png`;  
          this.nuevoJuego.gano= true;
          this.nuevoJuego.jugador=sessionStorage.getItem('user');
          this.nuevoJuego.guardarLocal();
          
        }
      if(ganador==false) {
        errorEmail.innerHTML = (`<h1 id='msjPuntos'><p class='resultados'>${mensaje} <i class="far fa-frown"></i></p></h1>`);
        resultado1.src = `../../../assets/PPT/img/a${this.elecccionJugador}.png`;
        resultado2.src = `../../../assets/PPT/img/m${this.eleccionMalo}.png`;        
        this.nuevoJuego.gano= false;
        this.nuevoJuego.jugador=sessionStorage.getItem('user');
        this.nuevoJuego.guardarLocal();
        
        }
      if (ganador==null) {
        errorEmail.innerHTML = (`<h1 id='msjPuntos'><p class='resultados'>${mensaje} <i class="far fa-meh"></i></p></h1>`);
        resultado1.src = `./assets/PPT/img/a${this.elecccionJugador}.png`;
        resultado2.src = `./assets/PPT/img/m${this.eleccionMalo}.png`;
    
        
      }
  
      var modelo=this;
       setTimeout( () => {      
        errorEmail.innerHTML = "";
        resultado1.src = "";
        resultado2.src = "";
     }, 5000 );
           
  
      setTimeout( () => {
        this.mostrarGif = true
        botonPiedra.disabled =false;
        botonPapel.disabled =false;
        botonTijera.disabled =false;
      }, 2500 );

    
     } 

  ngOnInit() {
  }

}
