import { Component, OnInit } from '@angular/core';
import { GiffsserviceService } from '../services/giffsservice.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

  get resultados() {
    return this.giffsserviceService.resultados;
  }

  constructor(private giffsserviceService: GiffsserviceService) { }

 

}
