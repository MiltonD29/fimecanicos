import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Cliente } from '../models/cliente';

@Injectable()
export class ClienteService {

  clienteList: AngularFireList<any>;
  selectedCliente:Cliente = new Cliente();

  constructor( public firebase:AngularFireDatabase ) { }

  getClientes(){
    return this.clienteList = this.firebase.list('clientes')
  }

  insertCliente(cliente: Cliente){
    this.clienteList.push({
      nombre:cliente.nombre,
      apellidos:cliente.apellidos,
      modelo:cliente.modelo,
      marca:cliente.marca,
      anio:cliente.anio,
      placas:cliente.placas,
      correo:cliente.correo,
      telefono:cliente.telefono
    });
  }

  updateCliente(cliente: Cliente){
    this.clienteList.update(cliente.$key, {
      nombre:cliente.nombre,
      apellidos:cliente.apellidos,
      modelo:cliente.modelo,
      marca:cliente.marca,
      anio:cliente.anio,
      placas:cliente.placas,
      correo:cliente.correo,
      telefono:cliente.telefono
    });
  }

  deleteCliente($key:string){
    this.clienteList.remove($key);
  }

}
