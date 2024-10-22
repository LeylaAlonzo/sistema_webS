// contacto.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private apiUrl = 'http://localhost:3000/api/contacto'; // URL del endpoint del servidor

  constructor(private http: HttpClient) { }

  enviarContacto(contactoData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, contactoData);
  }
}
