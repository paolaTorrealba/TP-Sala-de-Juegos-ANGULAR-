import { Injectable } from '@angular/core';
// import { AngularFireAuth } from "@angular/fire/auth";


@Injectable()
export class AuthService {

  // constructor(private afAuth :  AngularFireAuth) { 
  //   console.log('Hello AuthProvider Provider');
  // }
  constructor() { 
      console.log('Hello AuthProvider Provider');
    }
 

   // Login de usuario
 public loginUser(email:string, password:string){
        let usuario = JSON.parse(localStorage.getItem("user"));
        if (usuario.email=== email && usuario.clave === 'password'){
          return true;
        }
        

  // return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  //   .then(user=>Promise.resolve(user))
  //   .catch(err=>Promise.reject(err))
}

// Devuelve la session
// public get Session(){
// //  return this.afAuth.authState;
// }

 // Logout de usuario
public logout(){
  // this.afAuth.auth.signOut().then(()=>{
    // hemos salido
  // })
}
}