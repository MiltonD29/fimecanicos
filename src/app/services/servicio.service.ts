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
      // motor:servicio.motor,
      // carroceria:servicio.carroceria,
      // suspension:servicio.suspension,
      // frenos:servicio.frenos,
      // otros:servicio.otros,
      // llantas_med:servicio.llantas_med,
      // llantas_cant:servicio.llantas_cant,
      // observacion:servicio.observacion,
      costo:servicio.costo
    });
  }

  updateServicio(servicio: Servicio){
    this.servicioList.update(servicio.$key, {
      cliente:servicio.cliente,
      empleado:servicio.empleado,
      servicio:servicio.servicio,
      // motor:servicio.motor,
      // carroceria:servicio.carroceria,
      // suspension:servicio.suspension,
      // frenos:servicio.frenos,
      // otros:servicio.otros,
      // llantas_med:servicio.llantas_med,
      // llantas_cant:servicio.llantas_cant,
      // observacion:servicio.observacion,
      costo:servicio.costo
    });
  }

  deleteServicio($key:string){
    this.servicioList.remove($key);
  }

}
