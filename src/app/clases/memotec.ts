import { Juego } from '../clases/juego'

export class Memotec extends  Juego {
   
    numeroSecreto: number = 0;
    numeroIngresado = 0;
    nombre="Memotec";

    constructor(nombre?: string, gano?: boolean, jugador?:string, intentos?:any,resultado?:string) {
      super(nombre,gano,jugador, intentos,resultado);  
    
   }
  
   public verificar(): boolean {
        throw new Error("Method not implemented.");
    }
    }
