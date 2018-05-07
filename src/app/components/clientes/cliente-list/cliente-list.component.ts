import { Component, OnInit, ViewContainerRef, Input } from '@angular/core';

//services
import { ClienteService } from '../../../services/cliente.service';

//clase cliente
import { Cliente } from '../../../models/cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  clienteList: Cliente[];

  constructor( private clienteService: ClienteService ) { }

  ngOnInit() {

    this.clienteService.getClientes()
      .snapshotChanges()
      .subscribe(item => {
        this.clienteList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.clienteList.push(x as Cliente);
        });
      });

  }

  onEdit(cliente: Cliente){
    this.clienteService.selectedCliente = Object.assign({},cliente);

  }

  onDelet($key:string){
    if (confirm("¿Seguro que deseas eliminar este cliente?")) {
      this.clienteService.deleteCliente($key);
      alert("Cliente eliminado exitosamente")
    }
  }

}
