import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//servicio
import { ClienteService } from '../../../services/cliente.service';

// cliente class
import { Cliente } from '../../../models/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor( public clienteService: ClienteService ) { }

  ngOnInit() {
    this.clienteService.getClientes();
    this.resetForm()
  }

  onSubmit(clienteForm: NgForm){
    if(clienteForm.value.$key == null)
      this.clienteService.insertCliente(clienteForm.value)
     else
      this.clienteService.updateCliente(clienteForm.value);

    this.resetForm(clienteForm);
  }

  resetForm(clienteForm?: NgForm){
    if(clienteForm != null){
      clienteForm.reset();
      this.clienteService.selectedCliente = new Cliente();
    }
  }

}
