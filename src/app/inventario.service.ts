import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface producto {
  id?: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
  disponible: boolean;
  fecha_creacion: string;
  cantidad: number;
}

@Injectable({
  providedIn: 'root',
})
export class InventarioService {
  private apiUrl = 'http://localhost:8000/api/productos/';

  constructor(private Http: HttpClient) {}

  getProductos(): Observable<producto[]> {
    return this.Http.get<producto[]>(this.apiUrl);
  }

  getProducto(id: number): Observable<producto[]> {
    return this.Http.get<producto[]>(`${this.apiUrl}${id}`);
  }

  agregarProducto(producto: producto): Observable<producto[]> {
    return this.Http.post<producto[]>(`${this.apiUrl}`, producto);
  }

  eliminarProducto(id: number): Observable<void> {
    return this.Http.delete<void>(`${this.apiUrl}${id}`);
  }
}
