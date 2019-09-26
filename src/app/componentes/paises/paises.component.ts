import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../servicios/paises.service';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss'],
  providers: [PaisesService]
})

export class PaisesComponent implements OnInit {

  constructor(private paisesService: PaisesService) { }
  
  public paises ;

   
  ngOnInit() {
    this.paisesService.BuscarTodos().subscribe(lista => {
         this.paises = lista;
        console.log(this.paises);
      })
  }

 

  

}
