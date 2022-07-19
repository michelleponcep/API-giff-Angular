import { Component, OnInit } from '@angular/core';
import { GiffsserviceService } from '../../giffs/services/giffsservice.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private giffsService: GiffsserviceService) {}

  get historial() {
    return this.giffsService.historial;
  }
  
  buscar(termino: string){
    this.giffsService.buscarGifs(termino);
  }

  ngOnInit(): void {
  }

}
