import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jeu } from './jeu.model';


@Injectable({
  providedIn: 'root'
})
export class ServicejeuService {

  constructor(private ListAvisGamingComponent:HttpClient) { }

  getJeu():Observable <Jeu[]>{
    return this.ListAvisGamingComponent.get<Jeu[]>('http://localhost:8580/application/getJeux');
  }

  postJeu(jeu:Jeu):Observable <any>{
    return this.ListAvisGamingComponent.post('http://localhost:8580/application/saveJeux', jeu);
  }

}
