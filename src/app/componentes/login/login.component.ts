import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {AuthService} from '../../servicios/auth.service';

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  tipoUser:string;
  user= { email : '', password : ''};
  mensaje:string;
  semuestra:boolean;

  progreso: number;
  progresoMensaje="esperando..."; 
  logeando=true;
  logueado:boolean
  ProgresoDeAncho:string;

  respuestaAuth: boolean;
  repetidor:any;

  clase="progress-bar progress-bar-info progress-bar-striped ";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public auth : AuthService) {
      this.progreso=0;
      this.ProgresoDeAncho="0%";
      const session = sessionStorage.getItem('user');
      if(session==null)
      {
      this.logueado=false;
      }
      else{
      this.logueado=true;  
      }

  }

  ngOnInit() {
  }

  // Entrar() {
  //   if (this.user === 'email' && this.clave === 'admin') {
  //     this.router.navigate(['/Principal']);
  //   }
  // }

  Entrar() {

    // this.auth.loginUser(this.user.email,this.user.password ).then((user) => {
    //   this.router.navigate(['/Principal']);
    //   sessionStorage.setItem("user",user.email);
    //   sessionStorage.setItem("muestra","true");
    //   }
      this.respuestaAuth = this.auth.loginUser(this.user.email,this.user.password );
      console.log(this.respuestaAuth);
    
      if (!this.respuestaAuth){

        this.progreso=0;
        this.ProgresoDeAncho="0%";
        this.MostarMensaje("Error al loguearse", true);
        this.logeando = true;
      }    
  }

  entrarComoAdmin()
  {
    this.user.email="ptorrealba@gmail.com";
    this.user.password="12345";
    this.router.navigate(['/Principal']);
  }

  MostarMensaje(mensaje:string,gano:boolean) {
    this.mensaje = mensaje;
   var x = document.getElementById("snackbar");
   if(gano)
       x.className = "show Ganador";
   var modelo = this;
   setTimeout(function(){ 
     x.className = x.className.replace("show", "");
     //modelo.ocultarVerificar=false;
    }, 3000);
   console.info("objeto",x);
 
  } 

  entrarComoInvitado()
  {
      this.user.email="invitado@gmail.com";
      this.user.password="12345";
      // this.repetidor = setInterval(()=>{ 
        
        this.MoverBarraDeProgreso();
  
        
        // }, 4000);
    
  }

  MoverBarraDeProgreso() {
    
    this.logeando=false;
    this.clase="progress-bar progress-bar-danger progress-bar-striped active";
    this.progresoMensaje="NSA spy..."; 
    let timer = TimerObservable.create(200, 50);
    this.subscription = timer.subscribe(t => {
      console.log("inicio");
      this.progreso=this.progreso+1;
      this.ProgresoDeAncho=this.progreso+20+"%";
      switch (this.progreso) {
        case 15:
        this.clase="progress-bar progress-bar-warning progress-bar-striped active";
        this.progresoMensaje="Verificando Usuario..."; 
          break;
        case 30:
          this.clase="progress-bar progress-bar-Info progress-bar-striped active";
          this.progresoMensaje="Verificando Contraseña.."; 
          break;
        case 60:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando Info del dispositivo..";
          break;
        case 75:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          // this.progresoMensaje="Recompilando claves facebook, gmail, chats..";
          break;
        case 85:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Proceso Finalizado. Ingresando...";
          break;          
        case 100:
          console.log("final");
          this.subscription.unsubscribe();
          // this.Entrar();
          this.router.navigate(['/Principal']);
          break;
      }     
    });
    //this.logeando=true;
  }

}
