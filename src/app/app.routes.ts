import { RouterModule, Routes } from '@angular/router';

import { NosotrosComponent, 
		 PlantiDepsisComponent, 
		 ServiciosComponent, 
		 OtrosserviComponent, 
		 MasinfoComponent, 
		 CoticmsmmdamComponent 
		} from './component/index.paginas';

const app_routes:Routes = [
	{ path: 'nosotros', component: NosotrosComponent },
	{ path: 'planesDepsis/:id', component: PlantiDepsisComponent },
	{ path: 'serviciospw', component: ServiciosComponent },
	{ path: 'otrosservicios/:id', component: OtrosserviComponent },
	{ path: 'masinfo/:id', component: MasinfoComponent },
	{ path: 'cotiotroservi', component: CoticmsmmdamComponent },
	{ path: '**', pathMatch: 'full', redirectTo:'nosotros' }
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});
