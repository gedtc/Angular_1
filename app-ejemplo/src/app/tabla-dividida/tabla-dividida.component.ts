import { Component, OnInit } from '@angular/core';
import {ListaService} from '../lista.service';
import { Portfolio } from '../portfolio';
@Component({
  selector: 'app-tabla-dividida',
  templateUrl: './tabla-dividida.component.html',
  styleUrls: ['./tabla-dividida.component.css']
})
export class TablaDivididaComponent implements OnInit {
  arrayPortfolios : Array<Portfolio>;

  constructor(private servicioP : ListaService) { }

  ngOnInit() {
  }

}
