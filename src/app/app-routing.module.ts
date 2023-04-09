import { NgModule } from '@angular/core';
import {ActivatedRoute, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {InterventionListComponent} from "./intervention-list/intervention-list.component";
import {InterventionFormComponent} from "./intervention-form/intervention-form.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'interventions', component: InterventionListComponent },
  { path: 'new-intervention', component: InterventionFormComponent },
  { path : '**', redirectTo:'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ActivatedRoute]
})
export class AppRoutingModule { }
