import { Juego } from '../clases/juego';
    export class JuegoAnagrama extends Juego {

        palabraOrdenada:string;
        palabraIngresada:string;
        palabraDesordenada:string;
        nombre="Anagrama";
        constructor(nombre?: string, gano?: boolean, jugador?:string, intentos?:any,resultado?:string) {
            super(nombre, gano,jugador, intentos, resultado);  
            
          }
    
    
          arrayDePalabras : Array <any >= [
            { ordenada:"SACO",desordenada:"COSA" },
            { ordenada:"ALICANTE",desordenada:"CALIENTE" },
            { ordenada:"FRASE",desordenada:"FRESA" },
            { ordenada:"AMOR",desordenada:"ROMA" },
            { ordenada:"DELIRA",desordenada:"LIDERA" },
            { ordenada:"PEDRO",desordenada:"PODER" },
            { ordenada:"RESTO",desordenada:"RETOS" },
            { ordenada:"TRATA",desordenada:"TARTA" },
            { ordenada:"TORO",desordenada:"ROTO" },
            { ordenada:"CRONISTA",desordenada:"CORTINAS" },
            { ordenada:"EVA",desordenada:"AVE" }
    
        ];
    
        public asignarPalabra() {       
            let indice;
            indice =Math.floor(Math.random() * this.arrayDePalabras.length);
            console.log(this.arrayDePalabras[indice]["ordenada"]);
            this.palabraDesordenada=this.arrayDePalabras[indice]["desordenada"];
            this.palabraOrdenada=this.arrayDePalabras[indice]["ordenada"];
        }
    
    
        verificar(){
            if(this.palabraIngresada.toLowerCase() == this.palabraOrdenada.toLowerCase())
            {
            this.gano = true;
             }
            if (this.gano) {
                return true;
                } else {
                return false;
                }
                    return false;
                }
    }

