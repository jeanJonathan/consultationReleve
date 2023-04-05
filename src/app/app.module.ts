import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Pour pouvoir acceeder au donnees du serveur json
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterventionListComponent } from './intervention-list/intervention-list.component';
import { InterventionFormComponent } from './intervention-form/intervention-form.component';

//Importation du module Mat table pour gerer afficher la liste des releves d'intervention

@NgModule({
  declarations: [
    AppComponent,
    InterventionListComponent,
    InterventionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
