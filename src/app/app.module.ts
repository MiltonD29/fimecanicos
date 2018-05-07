import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }  from '@angular/http';
import { APP_ROUTING } from './app.routes';

import { FormsModule } from '@angular/forms';

//firebase
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFirestore } from 'angularfire2/firestore';

import { environment } from '../environments/environment';

//components
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EmpleadosListComponent } from './components/empleados/empleados-list/empleados-list.component';
import { EmpleadoComponent } from './components/empleados/empleado/empleado.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { RevisionComponent } from './components/agenda/revision/revision.component';
import { RevisionListComponent } from './components/agenda/revision-list/revision-list.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteComponent } from './components/clientes/cliente/cliente.component';
import { ClienteListComponent } from './components/clientes/cliente-list/cliente-list.component';
import { InventariosComponent } from './components/inventarios/inventarios.component';
import { InventarioComponent } from './components/inventarios/inventario/inventario.component';
import { InventariosListComponent } from './components/inventarios/inventarios-list/inventarios-list.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ServicioComponent } from './components/servicios/servicio/servicio.component';
import { ServiciosListComponent } from './components/servicios/servicios-list/servicios-list.component';

//servicios
import { EmpleadoService } from './services/empleado.service';
import { ClienteService } from './services/cliente.service';
import { AgendaService } from './services/agenda.service';
import { InventarioService } from './services/inventario.service';
import { ServicioService } from './services/servicio.service';
import { HistorialesComponent } from './components/historiales/historiales.component';
import { HistorialesListComponent } from './components/historiales/historiales-list/historiales-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadosListComponent,
    EmpleadoComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    AgendaComponent,
    RevisionComponent,
    RevisionListComponent,
    ClientesComponent,
    ClienteComponent,
    ClienteListComponent,
    InventariosComponent,
    InventarioComponent,
    InventariosListComponent,
    ServiciosComponent,
    ServicioComponent,
    ServiciosListComponent,
    HistorialesComponent,
    HistorialesListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    EmpleadoService,
    ClienteService,
    AgendaService,
    ServicioService,
    InventarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
