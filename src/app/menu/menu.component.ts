import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../inventario.service';
import { VentasService } from '../ventas.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  productos: any[] = [];
  pedido: any[] = []; // <-- Aquí agregamos la propiedad

  constructor(
    private inventarioService: InventarioService,
    private ventasService: VentasService
  ) {}

  ngOnInit(): void {
    this.inventarioService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

  agregarAlPedido(producto: any, cantidad: number) {
    if (cantidad > 0 && cantidad <= producto.cantidad) {
      const existente = this.pedido.find(p => p.producto_id === producto.id);
      if (existente) {
        existente.cantidad += cantidad;
      } else {
        this.pedido.push({
          producto_id: producto.id,
          nombre: producto.nombre,
          cantidad: cantidad,
          precio: producto.precio
        });
      }
    }
  }

  quitarDelPedido(producto_id: number) {
    this.pedido = this.pedido.filter(p => p.producto_id !== producto_id);
  }

  enviarPedido() {
    const productos = this.pedido.map(p => ({
      producto_id: p.producto_id,
      cantidad: p.cantidad
    }));
    this.ventasService.crearVenta({ productos }).subscribe(res => {
      alert('Venta realizada correctamente');
      this.pedido = [];
    }, err => {
      alert('Error al realizar la venta');
    });
  }
}