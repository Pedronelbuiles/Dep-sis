import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HeaderService {
	header:any = {};

  constructor( public http:Http ) { 
  	this.http.get("assets/data/header.json")
  				.subscribe( data => {
  					this.header = data.json();
  				})
  }

}
