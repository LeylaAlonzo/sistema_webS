import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router para la navegación

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
  // Lista estática de servicios
  servicios: any[] = [
    {
      ServicioId: 13,
      NombreServicio: 'Cielo Falso',
      Descripcion: 'Instalación profesional de cielos falsos para interiores.',
      RutaImagen: 'assets/imagenes/servicio1.jpeg'
    },
    {
      ServicioId: 14,
      NombreServicio: 'Electricidad',
      Descripcion: 'Servicios de instalación y reparación de sistemas eléctricos.',
      RutaImagen: 'assets/imagenes/servicio2.jpeg'
    },
    {
      ServicioId: 15,
      NombreServicio: 'Colocación de Piso SPC',
      Descripcion: 'Colocación de pisos SPC de alta durabilidad.',
      RutaImagen: 'assets/imagenes/servicio3.jpg'
    },
    {
      ServicioId: 16,
      NombreServicio: 'Plomería',
      Descripcion: 'Servicios completos de instalación y reparación de plomería.',
      RutaImagen: 'assets/imagenes/servicio4.jpeg'
    },
    {
      ServicioId: 17,
      NombreServicio: 'Herrería',
      Descripcion: 'Trabajo de herrería personalizada para proyectos residenciales.',
      RutaImagen: 'assets/imagenes/servicio5.jpeg'
    },
    {
      ServicioId: 18,
      NombreServicio: 'Albañilería',
      Descripcion: 'Construcción y reformas de albañilería.',
      RutaImagen: 'assets/imagenes/servicio6.jpeg'
    },
    {
      ServicioId: 19,
      NombreServicio: 'Sistema de Portones Eléctricos',
      Descripcion: 'Instalación y mantenimiento de portones automáticos.',
      RutaImagen: 'assets/imagenes/servicio7.jpeg'
    },
    {
      ServicioId: 20,
      NombreServicio: 'Aire Acondicionado',
      Descripcion: 'Instalación y reparación de sistemas de aire acondicionado.',
      RutaImagen: 'assets/imagenes/servicio8.jpeg'
    },
    {
      ServicioId: 21,
      NombreServicio: 'Puertas y Ventanas de PVC',
      Descripcion: 'Instalación de puertas y ventanas de PVC de alta calidad.',
      RutaImagen: 'assets/imagenes/servicio9.jpeg'
    },
    {
      ServicioId: 22,
      NombreServicio: 'Carpintería',
      Descripcion: 'Servicios de carpintería para muebles y estructuras.',
      RutaImagen: 'assets/imagenes/servicio10.jpeg'
    },
    {
      ServicioId: 23,
      NombreServicio: 'Socalo',
      Descripcion: 'Instalación de socalos para acabados de alta calidad.',
      RutaImagen: 'assets/imagenes/servicio11.jpeg'
    },
    {
      ServicioId: 24,
      NombreServicio: 'Tablayeso',
      Descripcion: 'Instalación de tablayeso para interiores.',
      RutaImagen: 'assets/imagenes/servicio12.jpeg'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // No se requiere lógica de inicialización en este caso
  }

  // Función para redirigir a la página de cotización con el servicio seleccionado
  seleccionarServicio(nombre: string): void {
    this.router.navigate(['/cotizacion'], { queryParams: { servicio: nombre } });
  }
}
