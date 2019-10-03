import { Juego } from '../clases/juego';


export class Tateti extends Juego{
    
    posiciones: Array<any>;
    juega:string;
    i:number;
    j:number;
    jugadas:number;
    nombre = "Tateti";

    constructor(nombre?: string, gano?: boolean, jugador?:string, intentos?:any,resultado?:string) {
        super(nombre, gano,jugador, intentos, resultado);        
    }

    generarTateti()
      {
        console.log("generar");
        this.posiciones = [['-','-','-'],
        ['-','-','-'],
        ['-','-','-']];
        this.juega = 'O';
        this.jugadas = 5;
        
      }

     reiniciar() {
      console.log("reiniciar");
        this.generarTateti();          
      }

     generarAleatorio()
      {
        this.i = Math.floor((Math.random() * 3) +0);
        this.j = Math.floor((Math.random() * 3) +0);
      }

     validar()
      {
        console.log("validar");
        if(this.posiciones[this.i][this.j] != "-")
            return true;
        return false;
      }


      eleccionMaquina()
      {
        console.log("eleccion");
        do{
            this.generarAleatorio();
            console.log("i: " + this.i + " j: " + this.j);
        }while(this.validar() && this.jugadas>1);
        this.posiciones[this.i][this.j] = this.juega;
        this.jugadas-=1;
        console.log(this.jugadas);
      }
  


      cambiarJugador() {
        if (this.juega=='O')
        {
          this.juega='X';          
        }
          else
          this.juega='O';    
      }     
      

    verificar(){
      console.log("verificar");
        return true;
    }
}