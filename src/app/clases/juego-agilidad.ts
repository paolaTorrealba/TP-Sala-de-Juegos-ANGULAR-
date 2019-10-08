import { Juego } from '../clases/juego';

export class JuegoAgilidad  extends  Juego {
    primerNumero:number;
    segundoNumero:number;
    resultado: number;
    operador: string;
    numOperador:number;
    resultadoUsuario:number
    nombre="Agilidad Aritmética";

    constructor(nombre?: string, gano?: boolean, jugador?:string, intentos?:any,resultado?:string) {
        super(nombre, gano,jugador, intentos, resultado);  
      }

    generar()
    {   this.resultado=0;  
        this.primerNumero = Math.round(Math.random()*10);
        this.segundoNumero = Math.round(Math.random()*10);
        this.numOperador = Math.round(Math.random()*3);  
        switch( this.numOperador)
        {
            case 0:
                this.operador = "+";
                this.resultado = this.primerNumero + this.segundoNumero;
                break;
            case 1:
                this.operador = "-";
                this.resultado = this.primerNumero - this.segundoNumero;
                break;
            case 2:
                this.operador = "*";
                this.resultado = this.primerNumero * this.segundoNumero;
                break;
            case 3:
                this.operador = "/";
                if(this.segundoNumero != 0)
                this.resultado = this.primerNumero / this.segundoNumero;
            break;    
        }
    }
    
    public verificar()
        {      
            if(this.resultado == this.resultadoUsuario)
            {
                this.gano = true;
            }
            if(this.gano)
            {
               return true;
            }
            else
            {
               return false;
            }        
        }
    }
