import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CotizacionService } from '../cotizacion.service'; // Asegúrate de que esta ruta sea correcta
import { ActivatedRoute, Router } from '@angular/router'; // Importa ActivatedRoute para obtener los parámetros de la URL
@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.scss']
})
export class CotizacionComponent implements OnInit {
  cotizacionForm!: FormGroup;
  servicios: string[] = [
    'Cielo Falso',
    'Tablayeso',
    'Electricidad',
    'Colocación de Piso SPC',
    'Socalo',
    'Carpintería',
    'Herrería',
    'Albañilería',
    'Plomería',
    'Sistema de Portones Eléctricos',
    'Aire Acondicionado',
    'Puertas y Ventanas de PVC',
    'Proyecto',
  ];
  codigoCotizacion: number | null = null; // Cambia a tipo number
  mensaje: string = ''; // Propiedad para el mensaje de estado


  constructor(private fb: FormBuilder, private cotizacionService: CotizacionService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.cotizacionForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]], // Solo letras y espacios
      correo: ['', [Validators.required, Validators.email]], // Agrega validadores para el correo
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(8), Validators.maxLength(15)]], // Solo números y longitud entre 8 y 15
      servicios: ['', Validators.required],
      detalle: [''],
    });

      // Obtén el parámetro 'servicio' de la URL
      this.route.queryParams.subscribe(params => {
        const servicioSeleccionado = params['servicio'];
        if (servicioSeleccionado) {
          this.cotizacionForm.patchValue({ servicios: servicioSeleccionado });
        }
      });


  }

  onSubmit(): void {
    if (this.cotizacionForm.valid) {
      this.cotizacionService.enviarCotizacion(this.cotizacionForm.value).subscribe(
        response => {
          console.log('Cotización enviada', response);
          this.codigoCotizacion = response.codigoCotizacion;
          this.cotizacionForm.reset();
          this.mensaje = 'Cotización enviada con éxito.'; // Mensaje de éxito
        },
        error => {
          console.error('Error al enviar cotización', error);
          this.mensaje = 'Hubo un problema al enviar la cotización. Por favor, inténtelo nuevamente.'; // Mensaje de error
        }
      );
    } else {
      if (this.cotizacionForm.controls['nombre'].hasError('pattern')) {
        this.mensaje = 'El nombre solo debe contener letras y espacios.'; // Mensaje específico si el nombre no es válido
      } else if (this.cotizacionForm.controls['telefono'].hasError('pattern')) {
        this.mensaje = 'El teléfono solo debe contener números.'; // Mensaje específico si el teléfono no es válido
      } else if (this.cotizacionForm.controls['telefono'].hasError('minlength') || this.cotizacionForm.controls['telefono'].hasError('maxlength')) {
        this.mensaje = 'El teléfono debe tener entre 8 y 15 dígitos.'; // Mensaje específico si la longitud no es válida
      } else if (this.cotizacionForm.controls['correo'].hasError('email')) {
        this.mensaje = 'El correo electrónico ingresado no es válido.'; // Mensaje específico si el correo no es válido
      } else {
        this.mensaje = 'Por favor, complete todos los campos del formulario.'; // Mensaje de validación general
      }
      console.log('Formulario inválido');
    }
  }
    // Método para navegar a la página de servicios
    regresarAServicios(): void {
      this.router.navigate(['/servicios']); // Cambia '/servicios' a la ruta correspondiente
    }


}
