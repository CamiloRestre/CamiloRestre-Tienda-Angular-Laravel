import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioComponent } from './inventario/inventario.component';
import { InventarioService } from './inventario.service';
import { VentasService } from './ventas.service';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  {path: 'inventario', component: InventarioComponent},
  {path: 'ventas', component: VentasService}, 
  {path: '', redirectTo: '/inventario', pathMatch: 'full' },
  {path: 'menu', component: MenuComponent, resolve: { inventario: InventarioService, ventas: VentasService } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
