import { Component, OnInit } from '@angular/core';
import { AnimalesHttpService } from '../../servicios/animales-http.service';
import {TimerObservable} from "rxjs/observable/TimerObservable";

@Component({
  selector: 'app-memotec',
  templateUrl: './memotec.component.html',
  styleUrls: ['./memotec.component.scss'],
  providers: [AnimalesHttpService]
})
export class MemotecComponent implements OnInit {
  animales;
  animalesRandom;
 mostrarFotos;
 juegoEmpezado;
 mensaje;
 mensajeRespuesta;
 myColor = '';
 tiempo:number;
 repetidor:any;
 nombreAnimal;
 respuesta;
 ocultar;
 color;
 mostrarSpiner

 numeroSecreto: number = 0;
 numeroIngresado = 0;
 constructor(private animalesService: AnimalesHttpService) { 
 
      this.animales=new Array();
      this.animalesRandom=new Array();
      // this.animalesService.getAnimales().subscribe(lista => {
      this.traerAnimales();
      console.log(this.animales);
      // this.animales=lista;
      this.mostrarSpiner=false;
      this.ocultar=true;
    // })
 }
 
 

 obtenerAnimalesRandom() {
  
  this.animalesRandom= [];
  console.log("estoy en random")
  console.log(this.animales);
  let num=0;
  while(num<8) {
    let numRandom:number = Math.floor((Math.random() * 23));
    if(this.PerteneceAnimal(this.animales[numRandom].nombreAnimal)) {
      this.animalesRandom.push(this.animales[numRandom]);
      num++;
     }
   }
 }

PerteneceAnimal(nombre:string) {
  console.log(this.animalesRandom);
  console.log("esty en pertenece");

  for(let i=0;i<this.animalesRandom.length;i++)
  {
    console.log(this.animalesRandom);
      if(this.animalesRandom[i].nombreAnimal==nombre) {
          return false;
      }
  }
  return true;
}
jugar() {  
  this.obtenerAnimalesRandom(); 
  this.mostrarFotos=true;
  this.juegoEmpezado=true;
  this.ocultar=true;
  let numRandom:number = Math.floor((Math.random() * 8)) + 1;
  this.tiempo=8;
  this.mensaje='';
  this.respuesta='';
  this.repetidor = setInterval(()=>{ 
    
    this.tiempo--;
    if(this.tiempo==0 ) {
      //this.GuardarJugada()
      clearInterval(this.repetidor);
      
      this.tiempo=8;
      this.mensaje="Cual es el nombre del animal de la foto: "+numRandom+"?";
      this.nombreAnimal=this.animalesRandom[numRandom-1].nombreAnimal;
      this.mostrarFotos=false;
    }
    }, 900);
}

verificar() {
  this.respuesta = this.respuesta.toLowerCase();
  if(this.respuesta == this.nombreAnimal) {   
      this.mensajeRespuesta = "Felicidades!! Ganaste";
  } 
  else {
    this.mensajeRespuesta = "Lo siento, perdiste. El animal era " + this.nombreAnimal; 
  }
  this.ocultar=false;
}

  ngOnInit() {
      this.mostrarFotos=false;
      this.juegoEmpezado=false;
      this.myColor="primary";
      this.color="red";
      this.tiempo=8;
      this.mensaje='';
    }

    traerAnimales(){
      this.animales=[
        { 
        "nombreAnimal":"aguila",
        "path":"./assets/imagenes/animales/aguila.jpg"  },
        {
         "nombreAnimal":"caballo",
         "path":"./assets/imagenes/animales/caballo.jpg"  
        },
       {
         "nombreAnimal":"cabra",
         "path":"./assets/imagenes/animales/cabra.jpg"  
       },
   
     {
       "nombreAnimal":"chancho",
       "path":"./assets/imagenes/animales/chancho.jpg"  
     },
   
   {
     "nombreAnimal":"chimpance",
     "path":"./assets/imagenes/animales/chimpance.jpg"  
   },
   
   {
     "nombreAnimal":"cisne",
     "path":"./assets/imagenes/animales/cisne.jpg"  
   },
   
   {
     "nombreAnimal":"conejo",
     "path":"./assets/imagenes/animales/conejo.jpg"  
   },
   
   {
     "nombreAnimal":"gallina",
     "path":"./assets/imagenes/animales/gallina.jpg"  
   },
   
   {
     "nombreAnimal":"gallo",
     "path":"./assets/imagenes/animales/gallo.jpg"  
   },
   
   {
     "nombreAnimal":"gato",
     "path":"./assets/imagenes/animales/gato.jpg"  
   },
   
   {
     "nombreAnimal":"gorila",
     "path":"./assets/imagenes/animales/gorila.jpg"  
   },
   
   {
     "nombreAnimal":"leon",
     "path":"./assets/imagenes/animales/leon.jpg"  
   }
   ,
   
   {
     "nombreAnimal":"loro",
     "path":"./assets/imagenes/animales/loro.jpg"  
   }
   ,
   
   {
     "nombreAnimal":"nutria",
     "path":"./assets/imagenes/animales/nutria.jpg"  
   }
   ,
   
   {
     "nombreAnimal":"orangutan",
     "path":"./assets/imagenes/animales/orangutan.jpg"  
   }
   ,
   
   
   {
     "nombreAnimal":"oveja",
     "path":"./assets/imagenes/animales/oveja.jpg"  
   }
   ,
   
   {
     "nombreAnimal":"paloma",
     "path":"./assets/imagenes/animales/paloma.jpg"  
   }
   ,
   
   {
     "nombreAnimal":"panda",
     "path":"./assets/imagenes/animales/panda.jpg"  
   },
   {
     "nombreAnimal":"pato",
     "path":"./assets/imagenes/animales/pato.jpg"  
   },
   {
     "nombreAnimal":"perro",
     "path":"./assets/imagenes/animales/perro.jpg"  
   },
   {
     "nombreAnimal":"raton",
     "path":"./assets/imagenes/animales/raton.jpg"  
   },
   {
     "nombreAnimal":"tigre",
     "path":"./assets/imagenes/animales/tigre.jpg"  
   },
   {
     "nombreAnimal":"vaca",
     "path":"./assets/imagenes/animales/vaca.jpg"  
   }
     ];
    }
 }

 

