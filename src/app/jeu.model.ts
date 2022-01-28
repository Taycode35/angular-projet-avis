import { Editeur } from "./editeur.model";
import { ModeleEconomique } from "./modele-economique.model";
import { Plateforme } from "./plateforme.model";
import { Classification } from "./classification.model";
import { Genre } from "./genre.model";

export class Jeu {
  // //id:number;
  // nom:string;
  // description:string;
  // editeur : Editeur;
  // dateSortie:Date;
  // classification:Classification;
  // genre:Genre;
  // modeleEconomique: ModeleEconomique;
  // plateforme: Plateforme;


  // constructor(
  //   //id:number,
  //   nom: string,
  //   editeur: Editeur,
  //   dateSortie: Date,
  //   description:string,
  //   classification: Classification,
  //   genre: Genre,
  //   modeleEconomique: ModeleEconomique,
  //   plateforme: Plateforme) {
  //   this.nom = nom;
  //   this.editeur = editeur;
  //   this.dateSortie = dateSortie;
  //   this.description=description;
  //   this.classification = classification;
  //   this.genre = genre;
  //   this.modeleEconomique = modeleEconomique;
  //   this.plateforme = plateforme;

  // }

  id : number = 0;
  nom : string = '';
  editeur : any = {id:0,nom:''};
  description : string = '';
  genre : any = {id:0,nom:''};
  plateformes : any[] = [];
  dateSortie : Date = new Date;
  image : string = '';

  constructor(nom:string, description:string, dateSortie:Date, editeur:any, genre:any, plateformes:any[]) {
    this.nom = nom;
    this.description = description;
    this.dateSortie = dateSortie;
    this.editeur = editeur;
    this.genre = genre;
    this.plateformes = plateformes;
  }
}
