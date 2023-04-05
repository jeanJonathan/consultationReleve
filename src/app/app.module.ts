import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { InterventionListComponent } from './intervention-list/intervention-list.component';
import { InterventionService } from './services/intervention.service';
import { TechnicienService } from './services/technicien.service';
import {InterventionFormComponent} from "./intervention-form/intervention-form.component";
import { InterventionDetailsComponent } from './intervention-details/intervention-details.component';
import {RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    InterventionListComponent,
    InterventionFormComponent,
    InterventionDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterOutlet
  ],
  providers: [
    InterventionService,
    TechnicienService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
