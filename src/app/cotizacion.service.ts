import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {
  private apiUrl = 'http://localhost:3000/api/cotizacion'; // Cambia la URL según sea necesario

  constructor(private http: HttpClient) {}

  // Enviar una nueva cotización
  enviarCotizacion(cotizacionData: any): Observable<any> {
    return this.http.post(this.apiUrl, cotizacionData); // Sin el uso de headers para el token
  }
// Buscar cotización por código
buscarCotizacion(codigo: string): Observable<any> {
  return this.http.get(`${this.apiUrl}/${codigo}`);
}

}
