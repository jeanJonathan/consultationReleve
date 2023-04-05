import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Intervention} from "../Intervention";

@Injectable({
  providedIn: 'root'
})
export class InterventionService {

  constructor(private http: HttpClient) { }

  getInterventions(id: number): Observable<Intervention[]> {
    return this.http.get<Intervention[]>('/api/interventions');
  }

  createIntervention(intervention: Intervention): Observable<Intervention> {
    return this.http.post<Intervention>('/api/interventions', intervention);
  }
}


