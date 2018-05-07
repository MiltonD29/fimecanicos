import { Injectable } from '@angular/core';

//firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

//clase inventario
import { Inventario } from '../models/inventario'

@Injectable()
export class InventarioService {

  inventarioList: AngularFireList<any>;
  selectedInventario:Inventario = new Inventario();

  constructor( public firebase:AngularFireDatabase ) { }

  getInventarios(){
    return this.inventarioList = this.firebase.list('inventarios')
  }

  insertInventario(inventario: Inventario){
    this.inventarioList.push({
      codigo:inventario.codigo,
      nombre:inventario.nombre,
      descripcion:inventario.descripcion,
      cantidad:inventario.cantidad
    });
  }

  updateInventario(inventario: Inventario){
    this.inventarioList.update(inventario.$key, {
      codigo:inventario.codigo,
      nombre:inventario.nombre,
      descripcion:inventario.descripcion,
      cantidad:inventario.cantidad
    });
  }

  deleteInventario($key:string){
    this.inventarioList.remove($key);
  }

}
