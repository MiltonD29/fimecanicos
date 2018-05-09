import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//servicio
import { InventarioService } from '../../../services/inventario.service';

// inventario class
import { Inventario } from '../../../models/inventario';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  constructor( public inventarioService: InventarioService ) { }

  ngOnInit() {
    this.inventarioService.getInventarios();
    this.resetForm()
  }

  onSubmit(inventarioForm: NgForm){
    if(inventarioForm.value.$key == null)
      this.inventarioService.insertInventario(inventarioForm.value)
     else
      this.inventarioService.updateInventario(inventarioForm.value);

    this.resetForm(inventarioForm);
  }

  resetForm(inventarioForm?: NgForm){
    if(inventarioForm != null){
      inventarioForm.reset();
      this.inventarioService.selectedInventario = new Inventario();
    }
  }

}
