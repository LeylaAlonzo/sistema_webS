import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactoService } from '../contacto.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  contactForm: FormGroup;
  mensaje: string = ''; // Para almacenar el mensaje de éxito o error

  constructor(private fb: FormBuilder, private contactoService: ContactoService) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]], // Solo letras y espacios
      email: ['', [Validators.required, Validators.email]], // Validadores para el correo
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{8,15}$')]], // Números entre 8 y 15 dígitos
      comentario: ['', Validators.required] // Comentario obligatorio
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      this.contactoService.enviarContacto(formData).subscribe(
        (response: any) => {
          console.log('Respuesta del servidor:', response);
          this.mensaje = 'Su mensaje ha sido enviado con éxito. Nos pondremos en contacto con usted a la brevedad.';
          this.contactForm.reset(); // Limpiar el formulario tras el envío
        },
        (error: HttpErrorResponse) => {
          console.error('Error al enviar el mensaje:', error.message);
          this.mensaje = 'Hubo un problema al enviar su mensaje. Por favor, inténtelo nuevamente más tarde.';
        }
      );
    } else {
      if (this.contactForm.controls['nombre'].hasError('pattern')) {
        this.mensaje = 'El nombre solo debe contener letras y espacios.';
      } else if (this.contactForm.controls['email'].hasError('email')) {
        this.mensaje = 'El correo electrónico ingresado no es válido.';
      } else if (this.contactForm.controls['telefono'].hasError('pattern')) {
        this.mensaje = 'El teléfono debe tener entre 8 y 15 dígitos.';
      } else if (this.contactForm.controls['comentario'].hasError('required')) {
        this.mensaje = 'El comentario es obligatorio.';
      } else {
        this.mensaje = 'Por favor, complete todos los campos del formulario.';
      }
    }
  }
}
