import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Para redirigir a la cotización

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss'],
})
export class ProyectosComponent implements OnInit {
  currentIndex = 0;
  projects = [
    {
      ProyectoId: 1,
      NombreProyecto: 'Construcción de una vivienda residencial moderna',
      DetallesA: 'Proyecto que abarca el diseño y edificación de una vivienda moderna.',
      Ubicacion: 'Ciudad de Guatemala',
      RutaImagen: 'assets/imagenes/fondo.jpg',
    },
    {
      ProyectoId: 2,
      NombreProyecto: 'Remodelación de oficinas corporativas',
      DetallesA: 'Transformación de un espacio laboral con un enfoque en eficiencia.',
      Ubicacion: 'Antigua Guatemala',
      RutaImagen: 'assets/imagenes/proyecto1.jpg',
    },
    {
      ProyectoId: 3,
      NombreProyecto: 'Desarrollo de un complejo habitacional',
      DetallesA: 'Creación de un conjunto de viviendas que integran sostenibilidad.',
      Ubicacion: 'Quetzaltenango',
      RutaImagen: 'assets/imagenes/proyecto2.jpg',
    },
    {
      ProyectoId: 4,
      NombreProyecto: 'Construcción de un centro comercial',
      DetallesA: 'Edificación de un espacio comercial diversificado.',
      Ubicacion: 'Escuintla',
      RutaImagen: 'assets/imagenes/proyecto3.jpg',
    },
    {
      ProyectoId: 5,
      NombreProyecto: 'Ampliación de una planta industrial',
      DetallesA: 'Expansión de instalaciones fabriles con tecnología avanzada.',
      Ubicacion: 'Mazatenango',
      RutaImagen: 'assets/imagenes/proyecto4.jpg',
    },
    // Agrega el resto de los proyectos de la tabla
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateCarousel(); // Inicia el carrusel
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    this.updateCarousel();
  }

  prevSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    this.updateCarousel();
  }

  updateCarousel(): void {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach((item, index) => {
      (item as HTMLElement).style.display =
        index === this.currentIndex ? 'block' : 'none';
    });
  }

  irACotizacion(): void {
    this.router.navigate(['/cotizacion'], {
      queryParams: { servicio: 'Proyecto' },
    });
  }
}
