import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { VisorComponent } from './components/visor/visor.component';
import { BotonAComponent } from './components/boton-a/boton-a.component';
import { BotonEComponent } from './components/boton-e/boton-e.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    VisorComponent,
    BotonAComponent,
    BotonEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
