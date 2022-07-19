import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/giffs.interface';

@Injectable({
  providedIn: 'root'
})
export class GiffsserviceService {

private apiKey     : string = '4gzkekcoI4TLgQPzOox5cY1qEG79na4M';
private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
private _historial : string[]= [];
public resultados  : Gif[]= []; 
// el splice es para que solo haya 10 registros en el sidebar
get historial() {
 
  return [...this._historial]
}

///esto es importante para el ciclo de vida del servicio
//el consturctor se va ejecutar una vez
constructor(private http: HttpClient) {
  //this._historial= JSON.parse( localStorage.getItem('historial')!) || [];

  if (localStorage.getItem('historial')) {
    this._historial= JSON.parse( localStorage.getItem('historial')!);
  }

  
  if (localStorage.getItem('resultados')) {
    this.resultados= JSON.parse( localStorage.getItem('resultados')!);
  }
 
}

buscarGifs( query: string= '') {
  query= query.trim().toLocaleLowerCase();

  // el includes es si no contiene ese registro, entonces si mostrarlo
  if(!this._historial.includes(query) ){
    this._historial.unshift(query);
    this._historial= this._historial.splice(0,10);
    
    //grabar en local storage del navegador
    localStorage.setItem('historial', JSON.stringify(this._historial));
   
  }

  const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('limit', '10')
        .set('q', query);

  console.log(params.toString());

 this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, {params})
 .subscribe((resp) => {
  console.log(resp);
  this.resultados=resp.data;
  localStorage.setItem('resultados', JSON.stringify(this.resultados));
 })
  
}
}
