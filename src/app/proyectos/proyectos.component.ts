import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  currentIndex = 0;

  // Datos de proyectos definidos directamente en el código
  projects = [
    {
      id: 1,
      nombre: 'Construcción de una vivienda residencial moderna',
      descripcion: 'Proyecto que abarca el diseño y edificación de una vivienda moderna en la Ciudad de Guatemala.',
      ubicacion: 'Ciudad de Guatemala',
      rutaImagen: 'assets/imagenes/fondo.jpg'
    },
    {
      id: 2,
      nombre: 'Remodelación de oficinas corporativas con espacios abiertos',
      descripcion: 'Transformación de un espacio laboral con un enfoque en colaboración y eficiencia.',
      ubicacion: 'Antigua Guatemala',
      rutaImagen: 'assets/imagenes/proyecto1.jpg'
    },
    {
      id: 3,
      nombre: 'Desarrollo de un complejo habitacional con enfoque comunitario',
      descripcion: 'Creación de un conjunto de viviendas que integran áreas comunes y servicios compartidos.',
      ubicacion: 'Quetzaltenango',
      rutaImagen: 'assets/imagenes/proyecto2.jpg'
    },
    {
      id: 4,
      nombre: 'Construcción de un centro comercial con más de 50 locales',
      descripcion: 'Edificación de un espacio comercial diversificado que incluye tiendas y áreas recreativas.',
      ubicacion: 'Escuintla',
      rutaImagen: 'assets/imagenes/proyecto3.jpg'
    },
    // Agregar el resto de los proyectos aquí...
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateCarousel(); // Inicializar el carrusel con los datos
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    this.updateCarousel();
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    this.updateCarousel();
  }

  updateCarousel(): void {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach((item, index) => {
      (item as HTMLElement).style.display = index === this.currentIndex ? 'block' : 'none';
    });
  }

  irACotizacion(): void {
    this.router.navigate(['/cotizacion'], { queryParams: { servicio: 'Proyecto' } }); // Redirigir con el servicio "Proyecto"
  }
}
