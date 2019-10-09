import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {
 @Output() 
  enviarJuego: EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego: JuegoAdivina;
  Mensajes:string;
  contador:number;
  ocultarVerificar:boolean;
  private subscription: Subscription;

  constructor() { 
    this.nuevoJuego = new JuegoAdivina();
    this.ocultarVerificar=false;

    // log
    console.info("Inicio Adivinar"); 
    console.info("numero Secreto:",this.nuevoJuego.numeroSecreto);  
    console.info("numero Ingresado:",this.nuevoJuego.numeroIngresado); 
    
  }

  ngOnInit() {}
  
  // ---------------generarNumero-----------------------  
  generarNumero() {
    this.nuevoJuego.generarNuevo();
    this.contador=0;
  }

  // ---------------verificar-----------------------  
  verificar(){
    console.info("numero Ingresado:",this.nuevoJuego.numeroIngresado); 
    this.contador++;
    this.ocultarVerificar=true;
    console.info("numero Secreto:",this.nuevoJuego.numeroSecreto);  
    if (this.nuevoJuego.verificar()){
      
      this.enviarJuego.emit(this.nuevoJuego);
      this.MostarMensaje("Sos un Genio!!!",true);
      this.nuevoJuego.numeroSecreto=0;
      this.nuevoJuego.numeroIngresado=0;

    }else{

      let mensaje:string;
      switch (this.contador) {
        case 1:
          mensaje="No, intento fallido, animo";
          break;
          case 2:
          mensaje="No,Te estaras Acercando???";
          break;
          case 3:
          mensaje="No es, Yo crei que la tercera era la vencida.";
          break;
          case 4:
          mensaje="No era el  "+this.nuevoJuego.numeroIngresado;
          break;
          case 5:
          mensaje=" intentos y nada.";
          break;
          case 6:
          mensaje="Afortunado en el amor";
          break;
      
        default:
            mensaje="Ya le erraste "+ this.contador+" veces";
          break;
      }
      this.MostarMensaje("#"+this.contador+" "+mensaje+" ayuda :"+this.nuevoJuego.retornarAyuda());
     

    }
    console.info("numero Ingresado:",this.nuevoJuego.numeroIngresado); 
    console.info("gano:",this.nuevoJuego.gano);  
    console.info("numero Secreto:",this.nuevoJuego.numeroSecreto);  
  }  

  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    var x = document.getElementById("msj");
    if(ganador)
      {
        x.className = "show Ganador";
        this.ocultarVerificar=true;
      }else{
        x.className = "show Perdedor";
      }
    var modelo=this;
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar=false;
     }, 3000);
    console.info("objeto",x);
  
   }  
  

}
