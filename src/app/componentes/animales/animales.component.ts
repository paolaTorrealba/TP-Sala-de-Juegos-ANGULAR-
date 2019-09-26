import { Component, OnInit } from '@angular/core';
import { AnimalesHttpService } from '../../servicios/animales-http.service';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.scss'],
  providers: [AnimalesHttpService]
})
export class AnimalesComponent implements OnInit {
  public animales;
  public animalesRandom;


  mostrarFotos;
  juegoEmpezado;
  mensaje;
  myColor = '';
  tiempo:number;
  repetidor:any;
  nombreAnimal;
  respuesta;
  ocultar;
  color;
  mostrarSpiner

  constructor(private animalesService: AnimalesHttpService) { 
 
    this.animalesRandom=new Array();
    this.animalesService.getAnimales().subscribe(lista => {
    this.animales=lista;
    console.log(this.animales);
    
  })
}

obtenerAnimalesRandom() {
  
  this.animalesRandom= [];
  let num=0;
  while(num<8)
  {
    let numRandom:number = Math.floor((Math.random() * 50));
    
  }
  console.log(this.animalesRandom);
}
jugar() {
  console.log("entre");
  this.obtenerAnimalesRandom();
  console.log("despues del random");
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
      this.mensaje="Cual es el nombre del animal de la foto "+numRandom+"?";
      this.nombreAnimal=this.animales[numRandom-1].nombreAnimal;
      this.mostrarFotos=false;
    }
    }, 900);
}

  ngOnInit() {
  }

}
