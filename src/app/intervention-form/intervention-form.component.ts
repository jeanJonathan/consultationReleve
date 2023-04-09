import {Component, OnInit} from '@angular/core';
import { TechnicienService } from "../services/technicien.service";
import { Technicien } from "../Technicien";
import {map, Observable, tap} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Intervention} from "../Intervention";
import {Router} from "@angular/router";
import {InterventionService} from "../services/intervention.service";

@Component({
  selector: 'app-intervention-form',
  templateUrl: './intervention-form.component.html',
  styleUrls: ['./intervention-form.component.css']
})
export class InterventionFormComponent implements OnInit{
  formulaire!: FormGroup;
  currentIntervention$!: Observable<Intervention>;
  marques: string[] = ['Chaffoteaux et Maury', 'Elm Leblanc', 'Saunier Duval', 'De Dietrich'];

  constructor(
    private technicienService: TechnicienService,
    private router: Router,
    private formBuilder: FormBuilder,
    private interventionService: InterventionService
  ) {}

  listTechnicien$!: Observable<Technicien[]>;
  ngOnInit(): void {
    this.listTechnicien$ =this.technicienService.getTechniciens();
    let thumbRegex = new RegExp('https?://.*.(?:png|jpg|jpeg|gif|svg|webp)$');
    this.formulaire = this.formBuilder.group({
      dateMiseEnService: [null, [Validators.required]],
      dateIntervention: [null, [Validators.required]],
      numSerie: [null, [Validators.required]],
      description: [null, [Validators.required]],
      tempsPasse: [null, [Validators.required, Validators.min(1)]],
      technicien: [null, [Validators.required]],
      client: [null, [Validators.required]],
      adresse: [null, [Validators.required]],
      marque: [null, [Validators.required]]
    }, {
      updateOn: 'blur'
    });

    this.currentIntervention$ = this.formulaire.valueChanges.pipe(map(formValue => {
      const intervention: Intervention = {
        id: 0,
        dateMiseEnService: formValue.dateMiseEnService,
        dateIntervention: formValue.dateIntervention,
        numeroSerie: formValue.numeroSerie,
        description: formValue.description,
        tempsPasse: formValue.tempsPasse,
        technicien: formValue.technicien,
        client: formValue.client,
        adresse: formValue.adresse,
        marque: formValue.marque,
        chaudiere: "",
        modele: "" // Ajout de la propriété 'modele'
      };
      return intervention;
    }));
  }

  addIntervention() {
    let uneNouvelleIntervention = new Intervention(
      0,
      this.formulaire.get('technicien')?.value,
      this.formulaire.get('client')?.value,
      this.formulaire.get('adresse')?.value,
      this.formulaire.get('marque')?.value,
      this.formulaire.get('modele')?.value, // Ajout de la propriété 'modele'
      this.formulaire.get('dateMiseEnService')?.value,
      this.formulaire.get('dateIntervention')?.value,
      this.formulaire.get('numSerie')?.value,
      this.formulaire.get('description')?.value,
      this.formulaire.get('tempsPasse')?.value,
      this.formulaire.get('chaudiere')?.value // Ajout de la propriété 'chaudiere'
    );
    this.interventionService.createIntervention(uneNouvelleIntervention)
      .subscribe(() => {
        this.router.navigateByUrl('/interventions');
      });
  }
  techniciens = {
    "1": {
      "id": 1,
      "nom": "Dupont",
      "prenom": "Jean",
      "specialite": "Chauffage"
    },
    "2": {
      "id": 2,
      "nom": "Martin",
      "prenom": "Paul",
      "specialite": "Climatisation"
    },
    "3": {
      "id": 3,
      "nom": "Dubois",
      "prenom": "Pierre",
      "specialite": "Plomberie"
    }
  };


}
