import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//servicio
import { AgendaService } from '../../../services/agenda.service';
import { ClienteService } from '../../../services/cliente.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

//clase revision
import { Agenda } from '../../../models/agenda';
import { Cliente } from '../../../models/cliente';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-revision',
  templateUrl: './revision.component.html',
  styleUrls: ['./revision.component.css']
})
export class RevisionComponent implements OnInit {

  // clientes: Observable<any[]>;


  constructor( private agendaService: AgendaService,  public firebase:AngularFireDatabase) {
    // this.clientes = firebase.list('clientes').valueChanges();
  }

  ngOnInit() {
    this.agendaService.getRevisiones();
    this.resetForm()
  }

  onSubmit(agendaForm: NgForm){
    if(agendaForm.value.$key == null)
      this.agendaService.insertRevision(agendaForm.value)
     else
      this.agendaService.updateRevision(agendaForm.value);

    this.resetForm(agendaForm);
  }

  resetForm(agendaForm?: NgForm){
    if(agendaForm != null){
      agendaForm.reset();
      this.agendaService.selectedRevision = new Agenda();
    }
  }

}
