import { Component } from '@angular/core';
import { TablaComponent } from "../../component/tabla/tabla.component";
import { Tabla2Component } from "../../component/tabla2/tabla2.component";
import { GaleriaComponent } from "../../component/galeria/galeria.component";

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [TablaComponent, TablaComponent, Tabla2Component, GaleriaComponent],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css'
})
export class InformacionComponent {
  vistacomics=true
  vista(){
    this.vistacomics= !this.vistacomics

  }
}
