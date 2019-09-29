
import { Component, OnInit , Input, EventEmitter} from '@angular/core';
import {Jugador} from '../../clases/jugador'

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {
 @Input()
 listado: Array<any>;
 objeto: Object;
 jugador: Jugador;

  constructor() { }


  ngOnInit() {

  }

  ver() {
    console.info(this.listado);
  }

  obtenerDatos()
    {
      let i:Number;
      this.listado = new Array<Jugador>();
      for(let i = 1; i< localStorage.length; i++)
      {
        let aux = i.toString();
        
        this.objeto = JSON.parse(localStorage.getItem("partida "+ aux));
        if(this.objeto['nombre'])
        {
          this.jugador = new Jugador();
          this.jugador.nombre=this.objeto['nombre'];
          this.jugador.gano=this.objeto['resultado'];
          this.jugador.usuario=this.objeto['jugador'];
        
        }
        console.log(this.jugador)
        this.listado.push(this.jugador);
      }
      console.log(this.listado);
    }



}
