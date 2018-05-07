import { Component, OnInit } from '@angular/core';

//servicio
import { AgendaService } from '../../../services/agenda.service';

//clase revision
import { Agenda } from '../../../models/agenda';

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-revision-list',
  templateUrl: './revision-list.component.html',
  styleUrls: ['./revision-list.component.css']
})
export class RevisionListComponent implements OnInit {

  agendaList: Agenda[];

  constructor( private agendaService: AgendaService ) { }

  ngOnInit() {

    this.agendaService.getRevisiones()
      .snapshotChanges()
      .subscribe(item => {
        this.agendaList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.agendaList.push(x as Agenda);
        });
      });

  }

  onEdit(agenda: Agenda){
    this.agendaService.selectedRevision = Object.assign({},agenda);
  }

  onDelet($key:string){
    if (confirm("¿Seguro que deseas eliminar esta revisión?")) {
      this.agendaService.deleteRevision($key);
      alert("Revisión eliminada exitosamente")
    }
  }

}
