import { Component } from '@angular/core';
import { TechnicienService } from "../services/technicien.service";
import { Technicien } from "../Technicien";

@Component({
  selector: 'app-intervention-form',
  templateUrl: './intervention-form.component.html',
  styleUrls: ['./intervention-form.component.css']
})
export class InterventionFormComponent {
  intervention: any = {
    dateMiseEnService: '',
    dateIntervention: '',
    numSerie: '',
    description: '',
    tempsPasse: 0,
    technicien: '',
    client: '',
    adresse: '',
    marque: ''
  };
  techniciens: Technicien[] = [];
  marques: string[] = ['Marque 1', 'Marque 2', 'Marque 3']; // <-- ajouter cette propriété

  constructor(private technicienService: TechnicienService) { }

  ngOnInit() {
    this.technicienService.getTechniciens().subscribe((techniciens: Technicien[]) => {
      this.techniciens = techniciens;
    });
  }

  onSubmit() {
    console.log(this.intervention);
  }
}
