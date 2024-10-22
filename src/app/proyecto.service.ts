import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private apiUrl = 'http://localhost:3000/api/proyectos'; // Asegúrate que la URL es correcta

  constructor(private http: HttpClient) { }

  obtenerProyectos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
