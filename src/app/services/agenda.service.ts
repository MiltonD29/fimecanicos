import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

// clases
import { Agenda } from '../models/agenda';
import { Cliente } from '../models/cliente';

@Injectable()
export class AgendaService {

  agendaList: AngularFireList<any>;
  selectedRevision:Agenda = new Agenda();

  clientes: Observable<any[]>;

  constructor( private firebase:AngularFireDatabase ) {
    this.clientes = firebase.list('clientes').valueChanges();
  }


  getRevisiones(){
    return this.agendaList = this.firebase.list('agenda')
  }

  insertRevision(agenda: Agenda){
    this.agendaList.push({
      cliente:agenda.cliente,
      fecha:agenda.fecha,
      hora:agenda.hora,
      revision:agenda.revision,
    });
  }

  updateRevision(agenda: Agenda){
    this.agendaList.update(agenda.$key, {
      cliente:agenda.cliente,
      fecha:agenda.fecha,
      hora:agenda.hora,
      revision:agenda.revision,
    });
  }

  deleteRevision($key:string){
    this.agendaList.remove($key);
  }

}
