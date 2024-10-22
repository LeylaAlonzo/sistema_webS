import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CotizacionService } from '../cotizacion.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-seguimiento-cotizacion',
  templateUrl: './seguimiento-cotizacion.component.html',
  styleUrls: ['./seguimiento-cotizacion.component.scss']
})
export class SeguimientoCotizacionComponent implements OnInit {
  seguimientoForm!: FormGroup;
  cotizacion: any = null; // Almacena los datos de la cotización buscada
  mensajeError: string = ''; // Mensaje de error si la búsqueda falla

  constructor(private fb: FormBuilder, private cotizacionService: CotizacionService) {}

  ngOnInit(): void {
    this.seguimientoForm = this.fb.group({
      codigo: ['', [Validators.required, Validators.pattern('^[A-Z0-9-]+$')]] // Validación del código
    });
  }

  buscarCotizacion(): void {
    if (this.seguimientoForm.valid) {
      const codigo = this.seguimientoForm.get('codigo')?.value;

      this.cotizacionService.buscarCotizacion(codigo).subscribe(
        (response) => {
          this.cotizacion = response.data;
          this.mensajeError = '';
        },
        (error) => {
          console.error('Error al buscar cotización', error);
          this.mensajeError = 'No se encontró una cotización con ese código.';
          this.cotizacion = null;
        }
      );
    } else {
      this.mensajeError = 'Por favor ingrese un código de cotización válido.';
    }
  }
}
