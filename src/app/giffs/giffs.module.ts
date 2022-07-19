import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiffspageComponent } from './giffspage/giffspage.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GiffspageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  exports: [
    GiffspageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GiffsModule { }
