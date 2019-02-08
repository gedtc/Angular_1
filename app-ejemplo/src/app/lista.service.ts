import { Injectable } from '@angular/core';
import { Portfolio } from './portfolio';


@Injectable({
  providedIn: 'root'
})
export class ListaService {
  lista : Array<Portfolio>;

  constructor() { 
    console.log("<<< CREANDO SERVICIO >>> ");
    this.lista = new Array<Portfolio>();
  }
  public listar() : Array<Portfolio> {
    console.log("<<< LISTA PORTFOLIOs: " + this.lista.length + " elementos >>>");
    for (var i = 0; i < this.lista.length; i++) {
      console.log("<<< Portfolio: " + this.lista[i] + " elementos >>>");
    }
    console.log("<<< LISTA PORTFOLIOs: " + this.lista.toString() + " >>>");  
    return this.lista;
  }
}


