import { Component, OnInit } from '@angular/core';

import { Servicio } from '../../../models/servicio';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-historiales-list',
  templateUrl: './historiales-list.component.html',
  styleUrls: ['./historiales-list.component.css']
})
export class HistorialesListComponent implements OnInit {

  historiales: Observable<any[]>;

  constructor( public firebase:AngularFireDatabase ) {
    this.historiales = firebase.list('servicios').valueChanges();
  }

  ngOnInit() {
  }

}
