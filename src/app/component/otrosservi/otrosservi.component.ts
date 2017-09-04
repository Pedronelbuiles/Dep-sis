import { Component } from '@angular/core';
import { MasinfoService } from '../../services/masinfo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-otrosservi',
  templateUrl: './otrosservi.component.html'
})
export class OtrosserviComponent {
	servicio:any = "";

	constructor( public route:ActivatedRoute, public _mi:MasinfoService ){
		route.params.subscribe( parametros => {
  		_mi.cargar_servicio(parametros['id'])
  			.subscribe(res => {
  				this.servicio = res.json();
  			})
  	})
	}


}
