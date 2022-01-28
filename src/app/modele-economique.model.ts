import { Jeu } from "./jeu.model";
import { Joueur } from "./joueur.model";

export class ModeleEconomique {
  id:number;
  nom:string;
  jeu:Jeu;

  constructor(id:number, nom:string, jeu:Jeu){
    this.id = id;
    this.nom =nom;
    this.jeu = jeu;
  }

}