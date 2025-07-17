import { Component, OnInit } from '@angular/core';
import { InventarioService, producto } from '../inventario.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit
 {

  productos: producto[] = [];
  nuevoProducto: producto = {
    nombre: '',
    categoria: '',
    descripcion: '',
    precio: 0,
    disponible: true,
    fecha_creacion: new Date().toISOString().split('T')[0],
    cantidad: 0
  };

  mensaje: string = '';

  constructor(private inventarioService: InventarioService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.inventarioService.getProductos().subscribe({
      next: (productos) =>{
        this.productos = productos;
      },
      error: (error) => this.mensaje = 'error al obtener productos'
    });
  }

  agregarProducto(): void {
    this.inventarioService.agregarProducto(this.nuevoProducto).subscribe({
      next: (respuesta) => {
        this.obtenerProductos();
        this.mensaje = 'Producto agregado correctamente';
        this.nuevoProducto = {
          nombre: '',
          categoria: '',
          descripcion: '',
          precio: 0,
          disponible: true,
          fecha_creacion: new Date().toISOString().split('T')[0],
          cantidad: 0
        };
      },
      error: (error) => this.mensaje = 'error al agregar producto'
    });

  }

  eliminarProducto(id: number): void {
    this.inventarioService.eliminarProducto(id).subscribe({
      next: () => {
        this.obtenerProductos();
        this.mensaje = 'Producto eliminado correctamente';
      },
      error: (error) => this.mensaje = 'error al eliminar producto'
    });
  }

}
