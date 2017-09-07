import { Component } from '@angular/core';
import { MasinfoService } from '../../services/masinfo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planti-depsis',
  templateUrl: './planti-depsis.component.html'
})
export class PlantiDepsisComponent {

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
