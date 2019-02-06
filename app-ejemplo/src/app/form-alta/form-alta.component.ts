import { Component, OnInit } from '@angular/core';


@Component({
  /* Metadatos */
  selector: 'app-form-alta',
  templateUrl: './form-alta.component.html',
  styleUrls: ['./form-alta.component.css']
})
export class FormAltaComponent implements OnInit {

titulo: string;
etiqueta_nombre : string;
placeholder_nombre : string;
nombreIntroducido : string;

  constructor() { }

  ngOnInit() {
    this.titulo = "Alta de portfolios";
    this.etiqueta_nombre = "Nombre: ";
    this.placeholder_nombre = "Introduzca nombre y apellidos";
  
  }

limpiar(){
  this.nombreIntroducido = "";
}

}
