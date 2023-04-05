import { Injectable } from '@angular/core';
import {Technicien} from "../Technicien";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TechnicienService {

  private apiUrl = 'http://localhost:3000/techniciens';

  constructor(private http: HttpClient) { }

  getTechniciens(): Observable<Technicien[]> {
    return this.http.get<Technicien[]>(this.apiUrl);
  }
}
