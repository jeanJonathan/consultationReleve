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
  chaudiere!: string; // Ajout de la propriété 'chaudiere'
}
