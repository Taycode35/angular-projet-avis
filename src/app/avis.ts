import { Jeu } from "./jeu.model";
import { Joueur } from "./joueur.model";
import { Moderateur } from "./moderateur.model";
export class Avis {
  id:number;
  dateEnvoi:Date;
  note: any;
  image:string;
  statut:string;
  jeu:Jeu
  joueur:Joueur;
  moderateur:Moderateur;


  constructor(id: number, statut: string, dateEnvoi: Date, image:string, note: any, joueur:Joueur, jeu:Jeu, moderateur:Moderateur) {
    this.id = id;
    this.dateEnvoi = dateEnvoi;
    this.note = note;
    this.image = image;
    this.statut = statut;
    this.joueur = joueur;
    this.jeu = jeu;
    this.moderateur = moderateur;
  }

}
