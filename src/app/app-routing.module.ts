import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InterventionListComponent} from "./intervention-list/intervention-list.component";
import {InterventionFormComponent} from "./intervention-form/intervention-form.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'interventions', component: InterventionListComponent },
  { path: 'new-intervention', component: InterventionFormComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
