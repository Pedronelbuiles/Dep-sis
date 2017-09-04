import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MasinfoService {

	mas:any [] = [];

  constructor( public http:Http ) { 
  	
   }


   public cargar_producto( id:string ) {
   	return this.http.get(`https://portafolio-61cf8.firebaseio.com/${ id }.json`);
   }

   public cargar_servicio(id:string){
   	return this.http.get(`https://portafolio-61cf8.firebaseio.com/paquetesYservicios/${id}.json`);
   }
}
