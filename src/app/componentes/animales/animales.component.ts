// import { Component, OnInit } from '@angular/core';
// import { AnimalesHttpService } from '../../servicios/animales-http.service';

// @Component({
//   selector: 'app-animales',
//   templateUrl: './animales.component.html',
//   styleUrls: ['./animales.component.scss'],
//   providers: [AnimalesHttpService]
// })
// export class AnimalesComponent implements OnInit {
//    animales;
//    animalesRandom;
//   mostrarFotos;
//   juegoEmpezado;
//   mensaje;
//   mensajeRespuesta;
//   myColor = '';
//   tiempo:number;
//   repetidor:any;
//   nombreAnimal;
//   respuesta;
//   ocultar;
//   color;
//   mostrarSpiner

//   numeroSecreto: number = 0;
//   numeroIngresado = 0;
//   constructor(private animalesService: AnimalesHttpService) { 
 
//     this.animales=new Array();
//     this.animalesRandom=new Array();
//     this.animalesService.getAnimales().subscribe(lista => {
//     this.animales=lista;
//     this.mostrarSpiner=false;
//     this.ocultar=true;
//   })
// }

// obtenerAnimalesRandom() {
  
//   this.animalesRandom= [];
//   let num=0;
//   while(num<8) {
//     let numRandom:number = Math.floor((Math.random() * 50));
//     if(this.PerteneceAnimal(this.animales[numRandom].nombreAnimal)) {
//       this.animalesRandom.push(this.animales[numRandom]);
//       num++;
//      }
//    }
//  }

// PerteneceAnimal(nombre:string) {
//   for(let i=0;i<this.animalesRandom.length;i++)
//   {
//       if(this.animalesRandom[i].nombreAnimal==nombre) {
//           return false;
//       }
//   }
//   return true;
// }
// jugar() {  
//   this.obtenerAnimalesRandom(); 
//   this.mostrarFotos=true;
//   this.juegoEmpezado=true;
//   this.ocultar=true;
//   let numRandom:number = Math.floor((Math.random() * 8)) + 1;
//   this.tiempo=8;
//   this.mensaje='';
//   this.respuesta='';
//   this.repetidor = setInterval(()=>{ 
    
//     this.tiempo--;
//     if(this.tiempo==0 ) {
//       //this.GuardarJugada()
//       clearInterval(this.repetidor);
      
//       this.tiempo=8;
//       this.mensaje="Cual es el nombre del animal de la foto: "+numRandom+"?";
//       this.nombreAnimal=this.animalesRandom[numRandom-1].nombreAnimal;
//       this.mostrarFotos=false;
//     }
//     }, 900);
// }

// verificar() {
//   this.respuesta = this.respuesta.toLowerCase();
//   if(this.respuesta == this.nombreAnimal) {   
//       this.mensajeRespuesta = "Felicidades!! Ganaste";
//   } 
//   else {
//     this.mensajeRespuesta = "Lo siento, perdiste. El animal era " + this.nombreAnimal; 
//   }
//   this.ocultar=false;
// }

//   ngOnInit() {
//     this.mostrarFotos=false;
//     this.juegoEmpezado=false;
//     this.myColor="primary";
//     this.color="red";
//     this.tiempo=8;
//     this.mensaje='';
//   }

// }
