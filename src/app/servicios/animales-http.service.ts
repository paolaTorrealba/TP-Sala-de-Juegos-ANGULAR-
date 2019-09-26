import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AnimalesHttpService {


  constructor(private http: HttpClient) {
 
   }
 
   getAnimales() {
     return this.http.get('https://lab4ivagaza.000webhostapp.com/apiJuegos/animales/');
   }
}
