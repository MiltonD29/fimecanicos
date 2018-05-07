import { Component, OnInit, ViewContainerRef } from '@angular/core';

//services
import { EmpleadoService } from '../../../services/empleado.service';

//clase empleado
import { Empleado } from '../../../models/empleado';

@Component({
  selector: 'app-empleados-list',
  templateUrl: './empleados-list.component.html',
  styleUrls: ['./empleados-list.component.css']
})
export class EmpleadosListComponent implements OnInit {

  empleadoList: Empleado[];

  constructor( private empleadoService: EmpleadoService ) { }

  ngOnInit() {

    this.empleadoService.getEmpleados()
      .snapshotChanges()
      .subscribe(item => {
        this.empleadoList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.empleadoList.push(x as Empleado);
        });
      });

  }

  onEdit(empleado: Empleado){
    this.empleadoService.selectedEmpleado = Object.assign({},empleado);
  }

  onDelet($key:string){
    if (confirm("¿Seguro que deseas eliminar este empleado?")) {
      this.empleadoService.deleteEmpleado($key);
      alert("Empleado eliminado exitosamente")
    }
  }



}
