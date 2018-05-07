import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Servicio } from '../models/servicio';

@Injectable()
export class ServicioService {

  servicioList: AngularFireList<any>;
  selectedServicio:Servicio = new Servicio();

  constructor( private firebase:AngularFireDatabase ) { }

  getServicios(){
    return this.servicioList = this.firebase.list('servicios')
  }

  insertServicio(servicio: Servicio){
    this.servicioList.push({
      cliente:servicio.cliente,
      empleado:servicio.empleado,
      servicio:servicio.servicio,
      llantas:servicio.llantas,
      cantidad:servicio.cantidad,
      observacion:servicio.observacion,
      costo:servicio.costo,
      costo_llanta:servicio.costo_llanta
    });
  }

  updateServicio(servicio: Servicio){
    this.servicioList.update(servicio.$key, {
      cliente:servicio.cliente,
      empleado:servicio.empleado,
      servicio:servicio.servicio,
      llantas:servicio.llantas,
      cantidad:servicio.cantidad,
      observacion:servicio.observacion,
      costo:servicio.costo,
      costo_llanta:servicio.costo_llanta
    });
  }

  deleteServicio($key:string){
    this.servicioList.remove($key);
  }

}
