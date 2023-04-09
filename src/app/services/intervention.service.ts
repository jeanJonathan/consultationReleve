import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, switchMap, tap} from "rxjs";
import {Intervention} from "../Intervention";

@Injectable({
  providedIn: 'root'
})
export class InterventionService {

  constructor(private http: HttpClient) { }

  getInterventionsById(id: number): Observable<Intervention> {
    return this.http.get<Intervention>('http://localhost:3000/interventions/' + id).pipe(
      map(intervention => {
        if (intervention) {
          return intervention;
        } else {
          throw new Error('Intervention introuvable');
        }
      })
    );
  }

  getInterventions(): Observable<Intervention[]> {
    return this.http.get<Intervention[]>('http://localhost:3000/interventions/');
  }

  createIntervention(intervention: Intervention): Observable<Intervention> {
    return this.getInterventions().pipe(
      map(cds => [...cds].sort((a,b) => a.id - b.id)),
      map(cds_tries => cds_tries[cds_tries.length - 1]),
      tap(cd_max => intervention.id = cd_max.id + 1),
      switchMap(() => this.http.post<Intervention>('http://localhost:3000/interventions', intervention))
    );
  }
}


