import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Intervention } from '../Intervention';
import {InterventionService} from "../services/intervention.service";

@Component({
  selector: 'app-intervention-details',
  templateUrl: './intervention-details.component.html',
  styleUrls: ['./intervention-details.component.css']
})
export class InterventionDetailsComponent implements OnInit {

  intervention!: Intervention;

  constructor(private route: ActivatedRoute, private interventionService: InterventionService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const interventionId = +id;
      this.getIntervention(interventionId);
    }
  }

  getIntervention(id: number): void {
    this.interventionService.getInterventions(id)
      .subscribe((interventions: Intervention[]) => this.intervention = interventions[0]);
  }

}
