import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joueur } from './joueur.model';

@Injectable({
  providedIn: 'root'
})
export class ServicejoueurService {

  constructor(private Joueur:HttpClient) { }

  getJoueur():Observable<Joueur[]>{
    return this.Joueur.get<Joueur[]>('http://localhost:8580/application/joueur')
  }
}
