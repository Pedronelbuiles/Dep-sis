import { Component } from '@angular/core';
import { MasinfoService } from '../../services/masinfo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-masinfo',
  templateUrl: './masinfo.component.html'
})
export class MasinfoComponent {

	producto:any = "";

	constructor( public _mi:MasinfoService, public route:ActivatedRoute ) {

		route.params.subscribe( parametros  => {
			// console.log(parametros);
			// console.log(parametros['id']);
			_mi.cargar_producto(parametros['id'])
				.subscribe( res => {
					this.producto = res.json();
					console.log(this.producto);
				});
		})

	}

}
