export class Intervention {
  id!: number;
  technicien!: string;
  client!: string;
  adresse!: string;
  marque!: string;
  modele!: string;
  dateMiseEnService!: Date;
  dateIntervention!: Date;
  numeroSerie!: string;
  description!: string;
  tempsPasse!: number;
  chaudiere!: string;

  constructor(
    id: number,
    technicien: string,
    client: string,
    adresse: string,
    marque: string,
    modele: string,
    dateMiseEnService: Date,
    dateIntervention: Date,
    numeroSerie: string,
    description: string,
    tempsPasse: number,
    chaudiere: string
  ) {
    this.id = id;
    this.technicien = technicien;
    this.client = client;
    this.adresse = adresse;
    this.marque = marque;
    this.modele = modele;
    this.dateMiseEnService = dateMiseEnService;
    this.dateIntervention = dateIntervention;
    this.numeroSerie = numeroSerie;
    this.description = description;
    this.tempsPasse = tempsPasse;
    this.chaudiere = chaudiere;
  }
}
