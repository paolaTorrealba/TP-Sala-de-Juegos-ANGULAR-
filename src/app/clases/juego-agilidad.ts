import { Juego } from '../clases/juego';

export class JuegoAgilidad  extends  Juego {

    primerNumero = 0;
    segundoNumero = 0;
    operadorList : any[] = [ "suma","resta","multiplicacion","division"];
    operadorSeleccionado : any='';
    resultado = 0;
    resultadoIngresado = 0;

    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Agilidad Aritmetica",gano,jugador);      
    }

    public verificar() {
        if ((this.primerNumero !=0) &&  (this.segundoNumero!=0) && (this.operadorSeleccionado!='')) {
            switch(this.operadorSeleccionado) { 
                case '+': { 
                    this.resultado= this.primerNumero +  this.segundoNumero;
                   break; 
                } 
                case '-': { 
                    this.resultado= this.primerNumero -  this.segundoNumero;         
                   break; 
                } 
                case '/': { 
                    if(this.segundoNumero>0)
                        this.resultado= this.primerNumero / this.segundoNumero;   
                    else  {
                        console.log("error al dividir por 0");
                    }    

                break; 
                } 
                case '*': { 
                    this.resultado= this.primerNumero *  this.segundoNumero;         
                   break; 
                } 
                default: { 
                   
                   break; 
                } 
            } 
           
            if(this.resultadoIngresado == this.resultado )
               this.gano = true;
        }
        if (this.gano) {
          return true;
        } else {
          return false;
        }
     }
}
