import { Juego } from '../clases/juego';

export class JuegoAgilidad  extends  Juego {
    primerNumero:number;
    segundoNumero:number;
    resultado: number;
    operador: string;
    resultadoUsuario:number
    nombre="Agilidad Aritmética";

    constructor(nombre?: string, gano?: boolean, jugador?:string, intentos?:any,resultado?:string) {
        super(nombre, gano,jugador, intentos, resultado);  
      }

    generar()
    {
        this.primerNumero = Math.round(Math.random()*10);
        this.segundoNumero = Math.round(Math.random()*10);
        let numOperador = Math.round(Math.random()*3);

        switch(numOperador)
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

//     primerNumero :number;
//     segundoNumero :number;
//     operadorList :string;
//     operadorSeleccionado : any='';
//     resultado = 0;
//     resultadoIngresado = 0;

//     constructor(nombre?: string, gano?: boolean, jugador?:string) {
//         super("Agilidad Aritmetica",gano,jugador);      
//     }

//     public verificar() {
//         if ((this.primerNumero !=0) &&  (this.segundoNumero!=0) && (this.operadorSeleccionado!='')) {
//             switch(this.operadorSeleccionado) { 
//                 case '+': { 
//                     this.resultado= this.primerNumero +  this.segundoNumero;
//                    break; 
//                 } 
//                 case '-': { 
//                     this.resultado= this.primerNumero -  this.segundoNumero;         
//                    break; 
//                 } 
//                 case '/': { 
//                     if(this.segundoNumero>0)
//                         this.resultado= this.primerNumero / this.segundoNumero;   
//                     else  {
//                         console.log("error al dividir por 0");
//                     }    

//                 break; 
//                 } 
//                 case '*': { 
//                     this.resultado= this.primerNumero *  this.segundoNumero;         
//                    break; 
//                 } 
//                 default: { 
                   
//                    break; 
//                 } 
//             } 
           
//             if(this.resultadoIngresado == this.resultado )
//                this.gano = true;
//         }
//         if (this.gano) {
//           return true;
//         } else {
//           return false;
//         }
//      }
// }
