import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joueur } from './joueur.model';

@Injectable({
  providedIn: 'root'
})
export class ServicemoderateurService {

  constructor(private httpClient:HttpClient) { }
  getModerateur():Observable<Joueur[]>{
    return this.httpClient.get<Joueur[]>('http://localhost:8580/application/avis');
  }
}
