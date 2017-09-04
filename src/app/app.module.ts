import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//rutas
import { app_routing } from './app.routes';

//servicios

import { HeaderService } from './services/header.service';
import { MasinfoService } from './services/masinfo.service';

//componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NosotrosComponent } from './component/nosotros/nosotros.component';
import { PlantiDepsisComponent } from './component/planti-depsis/planti-depsis.component';
import { ServiciosComponent } from './component/servicios/servicios.component';
import { MasinfoComponent } from './component/masinfo/masinfo.component';
import { OtrosserviComponent } from './component/otrosservi/otrosservi.component';
import { CoticmsmmdamComponent } from './component/coticmsmmdam/coticmsmmdam.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NosotrosComponent,
    PlantiDepsisComponent,
    ServiciosComponent,
    MasinfoComponent,
    OtrosserviComponent,
    CoticmsmmdamComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing
  ],
  providers: [
    HeaderService,
    MasinfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
