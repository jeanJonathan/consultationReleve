import { Component, OnInit } from '@angular/core';
import { InterventionService } from '../services/intervention.service';
import {Intervention} from "../Intervention";
import {Observable} from "rxjs";
import {TechnicienService} from "../services/technicien.service";
import {Technicien} from "../Technicien";


@Component({
  selector: 'app-intervention-list',
  templateUrl: './intervention-list.component.html',
  styleUrls: ['./intervention-list.component.css']
})
export class InterventionListComponent implements OnInit {

  constructor(private interventionService: InterventionService) { }
  listInterventions$!: Observable<Intervention[]>;
  //technicienService$!: Observable<Technicien[]>;
  ngOnInit(): void {
    this.listInterventions$ = this.interventionService.getInterventions();
  }
}
