import { Component, OnInit } from '@angular/core';

//services
import { InventarioService } from '../../../services/inventario.service';

//clase inventario
import { Inventario } from '../../../models/inventario';

@Component({
  selector: 'app-inventarios-list',
  templateUrl: './inventarios-list.component.html',
  styleUrls: ['./inventarios-list.component.css']
})
export class InventariosListComponent implements OnInit {

  inventarioList: Inventario[];

  constructor( public inventarioService: InventarioService ) { }

  ngOnInit() {

    this.inventarioService.getInventarios()
      .snapshotChanges()
      .subscribe(item => {
        this.inventarioList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.inventarioList.push(x as Inventario);
        });
      });

  }

  onEdit(inventario: Inventario){
    this.inventarioService.selectedInventario = Object.assign({},inventario);

  }

  onDelet($key:string){
    if (confirm("¿Seguro que deseas eliminar este inventario?")) {
      this.inventarioService.deleteInventario($key);
      alert("Inventario eliminado exitosamente")
    }
  }

}
