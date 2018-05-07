import { Component, OnInit } from '@angular/core';

//services
import { ServicioService } from '../../../services/servicio.service';

//clase servicio
import { Servicio } from '../../../models/servicio';

@Component({
  selector: 'app-servicios-list',
  templateUrl: './servicios-list.component.html',
  styleUrls: ['./servicios-list.component.css']
})
export class ServiciosListComponent implements OnInit {

  servicioList: Servicio[];

  constructor( private servicioService: ServicioService ) { }

  ngOnInit() {

    this.servicioService.getServicios()
      .snapshotChanges()
      .subscribe(item => {
        this.servicioList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.servicioList.push(x as Servicio);
        });
      });

  }

  onEdit(servicio: Servicio){
    this.servicioService.selectedServicio = Object.assign({},servicio);
  }

  onDelet($key:string){
    if (confirm("¿Seguro que deseas eliminar este servicio?")) {
      this.servicioService.deleteServicio($key);
      alert("Servicio eliminado exitosamente");
    }
  }

}
