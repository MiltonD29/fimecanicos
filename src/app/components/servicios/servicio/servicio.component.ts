import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//servicio
import { ServicioService } from '../../../services/servicio.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

// servicio class
import { Servicio } from '../../../models/servicio';
import { Cliente } from '../../../models/cliente';
import { Empleado } from '../../../models/empleado';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  clientes: Observable<any[]>;
  empleados: Observable<any[]>;

  constructor( private servicioService: ServicioService,  public firebase:AngularFireDatabase ) {
    this.clientes = firebase.list('clientes').valueChanges();
    this.empleados = firebase.list('empleados').valueChanges();
  }

  ngOnInit() {
    this.servicioService.getServicios();
    this.resetForm()
  }

  onSubmit(servicioForm: NgForm){
    if(servicioForm.value.$key == null)
      this.servicioService.insertServicio(servicioForm.value)
     else
      this.servicioService.updateServicio(servicioForm.value);

    this.resetForm(servicioForm);
  }

  resetForm(servicioForm?: NgForm){
    if(servicioForm != null){
      servicioForm.reset();
      this.servicioService.selectedServicio = new Servicio();
    }
  }

}
