import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { InicioComponent } from './inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeguimientoCotizacionComponent } from './seguimiento-cotizacion/seguimiento-cotizacion.component';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    QuienesSomosComponent,
    ServiciosComponent,
    ProyectosComponent,
    ContactoComponent,
    CotizacionComponent,
    SeguimientoCotizacionComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
