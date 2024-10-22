import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service'; // Importa el servicio
import { Router } from '@angular/router'; // Importa el Router para la navegación

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
  servicios: any[] = [];
  isTableVisible: boolean = false; // Propiedad para controlar la visibilidad de la tabla
  descripcionVisible: boolean = false; // Para controlar la visibilidad de la descripción
  tituloServicio: string = '';
  descripcionServicio: string = '';


  constructor(private serviciosService: ServiciosService, private router: Router) { } // Inyecta el servicio

  ngOnInit(): void {
    this.obtenerServicios();
  }

  obtenerServicios(): void {
    this.serviciosService.getServicios()
      .subscribe(data => {
        this.servicios = data;
      }, error => {
        console.error('Error al obtener los servicios', error);
      });
  }

  toggleTableVisibility(): void {
    this.isTableVisible = !this.isTableVisible; // Alternar la visibilidad de la tabla
  }
  seleccionarServicio(nombre: string): void {
    // Redirigir a la página de cotización y pasar el nombre del servicio seleccionado
    this.router.navigate(['/cotizacion'], { queryParams: { servicio: nombre } });
  }

}
