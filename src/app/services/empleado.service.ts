import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Empleado } from '../models/empleado';

@Injectable()
export class EmpleadoService {

  empleadoList: AngularFireList<any>;
  selectedEmpleado:Empleado = new Empleado();

  constructor( private firebase:AngularFireDatabase ) { }

  getEmpleados(){
    return this.empleadoList = this.firebase.list('empleados')
  }

  insertEmpleado(empleado: Empleado){
    this.empleadoList.push({
      nombre:empleado.nombre,
      apellidos:empleado.apellidos,
      rfc:empleado.rfc,
      telefono:empleado.telefono,
      puesto:empleado.puesto,
      fecha_nac:empleado.fecha_nac,
      fecha_con:empleado.fecha_con,
      direccion:empleado.direccion
    });
  }

  updateEmpleado(empleado: Empleado){
    this.empleadoList.update(empleado.$key, {
      nombre:empleado.nombre,
      apellidos:empleado.apellidos,
      rfc:empleado.rfc,
      telefono:empleado.telefono,
      puesto:empleado.puesto,
      fecha_nac:empleado.fecha_nac,
      fecha_con:empleado.fecha_con,
      direccion:empleado.direccion
    });
  }

  deleteEmpleado($key:string){
    this.empleadoList.remove($key);
  }

}
