import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiffsserviceService } from '../services/giffsservice.service';
//import { GiffsserviceService } from '../services/giffsservice.service';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent  {


  // el signo de admiracion es para decir que ese elemento siempre va a tener algo
  //asegura que el objeto no es nulo
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private giffsService: GiffsserviceService) {}

 buscar() {
  const valor = this.txtBuscar.nativeElement.value;
  if(valor.trim().length === 0){
    return;
  }

  this.giffsService.buscarGifs(valor);

  this.txtBuscar.nativeElement.value='';
 }

}
