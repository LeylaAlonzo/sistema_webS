import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private apiUrl = 'http://localhost:3000/api/servicios'; // URL de la API

  constructor(private http: HttpClient) { }

  // Método para obtener los servicios
  getServicios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
