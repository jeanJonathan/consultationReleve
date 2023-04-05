import { Component, OnInit } from '@angular/core';
import { InterventionService } from '../services/intervention.service';
import {Intervention} from "../Intervention";


@Component({
  selector: 'app-intervention-list',
  templateUrl: './intervention-list.component.html',
  styleUrls: ['./intervention-list.component.css']
})
export class InterventionListComponent implements OnInit {
  interventions!: Intervention[];
  id!: number;
  constructor(private interventionService: InterventionService) { }

  ngOnInit(): void {
    this.id = 1; // exemple de valeur
    this.getInterventions();
  }

  getInterventions(): void {
    this.interventionService.getInterventions(this.id)
      .subscribe(interventions => this.interventions = interventions);
  }
}
