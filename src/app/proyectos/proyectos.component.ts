import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../proyecto.service';
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  currentIndex = 0;
  projects: any[] = []; // Cambiar para que sea un array vacío

  constructor(private proyectoService: ProyectoService, private router: Router) {}

  ngOnInit(): void {
    this.proyectoService.obtenerProyectos().subscribe((data) => {
      this.projects = data;
      this.updateCarousel(); // Inicializar el carrusel con los datos
    });
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
