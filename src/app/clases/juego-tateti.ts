import { Juego } from '../clases/juego';

export class JuegoTateti extends Juego {




    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("TaTeTi",gano,jugador);
        this.jugador =localStorage.getItem("jugador");
      }

      public verificar(): boolean {
        throw new Error("Method not implemented.");
    }
}