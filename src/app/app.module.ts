import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { InterventionListComponent } from './intervention-list/intervention-list.component';
import { InterventionService } from './services/intervention.service';
import { TechnicienService } from './services/technicien.service';
import {InterventionFormComponent} from "./intervention-form/intervention-form.component";
import {RouterOutlet} from "@angular/router";
import {InputTimeDirective} from "./input-time.directive";
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    InterventionListComponent,
    InterventionFormComponent,
    InputTimeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    InterventionService,
    TechnicienService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
