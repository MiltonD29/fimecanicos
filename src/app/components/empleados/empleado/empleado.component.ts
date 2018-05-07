import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//servicio
import { EmpleadoService } from '../../../services/empleado.service';

// empleado class
import { Empleado } from '../../../models/empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor( private empleadoService: EmpleadoService ) { }

  ngOnInit() {
    this.empleadoService.getEmpleados();
    this.resetForm()
  }

  onSubmit(empleadoForm: NgForm){
    if(empleadoForm.value.$key == null)
      this.empleadoService.insertEmpleado(empleadoForm.value)
     else
      this.empleadoService.updateEmpleado(empleadoForm.value);

    this.resetForm(empleadoForm);
  }

  resetForm(empleadoForm?: NgForm){
    if(empleadoForm != null){
      empleadoForm.reset();
      this.empleadoService.selectedEmpleado = new Empleado();
    }
  }

}
