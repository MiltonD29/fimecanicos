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
  totalamount:number;
  recibido:number = 0;
  cambio:number = 0;
  totalllanta:number = 0;
  totalservicio:number = 0;

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

  getSubTotal() {
    let subtotal = 0;
    for (var i = 0; i < this.servicioList.length; i++) {
        if (this.servicioList[i].costo) {
            subtotal += this.servicioList[i].costo;
            this.totalamount = subtotal;
        }
    }
    return subtotal;
  }

  getIVA() {
    let iva = 0;
    for (var i = 0; i < this.servicioList.length; i++) {
        if (this.servicioList[i].costo) {
            iva += this.servicioList[i].costo;
            this.totalamount = iva;
        }
    }
    return iva*.16;
  }

  getTotalServicios(){
    let total = 0;
    for (var i = 0; i < this.servicioList.length; i++) {
        if (this.servicioList[i].costo) {
            total += this.servicioList[i].costo;
            this.totalservicio = total;
        }
    }
    return this.totalservicio*1.16;

  }

  getTotalLlanta(){
    let total = 0;
    let cantidad = 0;
    for (var i = 0; i < this.servicioList.length; i++) {
        if (this.servicioList[i].costo_llanta && this.servicioList[i].cantidad) {
            cantidad += this.servicioList[i].cantidad;
            total += this.servicioList[i].costo_llanta;
            this.totalllanta = total*cantidad;
            console.log(this.totalllanta)
        }
    }
    return this.totalllanta*1.16;

  }

  getTotalFinal(){
    return this.totalamount = this.totalllanta + this.totalservicio;
  }

  getCambio(){
    return this.cambio = this.recibido - (this.totalservicio*1.16 + this.totalllanta*1.16 );
  }

}
