import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosComponent } from './servicios/servicios.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { InicioComponent } from './inicio/inicio.component';  // Importa el nuevo componente
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { SeguimientoCotizacionComponent } from './seguimiento-cotizacion/seguimiento-cotizacion.component';






const routes: Routes = [

  { path: '', component: InicioComponent },  // Establece el componente de inicio como ruta por defecto
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'cotizacion', component: CotizacionComponent },
  { path: 'cotizacion', component: CotizacionComponent },
  { path: 'seguimiento-cotizacion', component: SeguimientoCotizacionComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
