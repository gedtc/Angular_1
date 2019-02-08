import { Component, OnInit } from '@angular/core';
import {ListaService} from '../lista.service'

@Component({
  selector: 'app-form-baja',
  templateUrl: './form-baja.component.html',
  styleUrls: ['./form-baja.component.css']
})
export class FormBajaComponent implements OnInit {
  nombreIntroducido : string;
  constructor(private servPortfolios : ListaService) { }
  ngOnInit() {
  }
  darDeBaja() : void {
    console.log("Baja: " + this.nombreIntroducido);
    this.servPortfolios.baja(this.nombreIntroducido);
  }
}

