import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  private apiUrl = 'http://localhost:8000/api/ventas';

  constructor(private http: HttpClient) { }
  // Obtener todas las ventas
  getVentas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  // Obtener una venta por ID
  getVenta(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Registrar una nueva venta
  crearVenta(venta: any): Observable<any> {
    return this.http.post(this.apiUrl, venta);
  }

}