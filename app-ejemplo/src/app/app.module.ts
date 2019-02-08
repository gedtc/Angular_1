import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAltaComponent } from './form-alta/form-alta.component';
import {ListaService} from './lista.service';
import { TablaDivididaComponent } from './tabla-dividida/tabla-dividida.component'
/* importar servicio tambien aqui */
@NgModule({
  declarations: [
    AppComponent,
    FormAltaComponent,
    TablaDivididaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ListaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
