import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InterventionListComponent} from "./intervention-list/intervention-list.component";
import {InterventionFormComponent} from "./intervention-form/intervention-form.component";
import {InterventionDetailsComponent} from "./intervention-details/intervention-details.component";

const routes: Routes = [
  { path: '', redirectTo: '/interventions', pathMatch: 'full' },
  { path: 'interventions', component: InterventionListComponent },
  { path: 'interventions/:id', component: InterventionDetailsComponent },
  { path: 'new-intervention', component: InterventionFormComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
