import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }  from './components/home/home.component';
import { AgendaComponent }  from './components/agenda/agenda.component';
import { EmpleadosComponent }  from './components/empleados/empleados.component';
import { ClientesComponent }  from './components/clientes/clientes.component';
import { InventariosComponent }  from './components/inventarios/inventarios.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { HistorialesComponent } from './components/historiales/historiales.component';

const app_routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'inventario', component: InventariosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'historial', component: HistorialesComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
