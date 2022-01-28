import { Jeu } from "./jeu.model";

export class Classification {
  id:number;
  nom:string;
  jeu:Jeu;

  constructor(id:number, nom:string, jeu:Jeu) {
    this.id = id;
    this.nom = nom;
    this.jeu = jeu;
  }
}

