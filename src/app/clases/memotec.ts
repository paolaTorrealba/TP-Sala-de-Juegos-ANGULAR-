import { Juego } from '../clases/juego'
export class Memotec extends  Juego {
   
    numeroSecreto: number = 0;
    numeroIngresado = 0;
    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Memotec",gano,jugador);
     
    
      
      }
//hacer
      public verificar(): boolean {
        throw new Error("Method not implemented.");
    }
    }
