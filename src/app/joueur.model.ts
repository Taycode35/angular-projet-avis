export class Joueur {
  pseudo:string;
  motDePasse:string;
  email:string;
  dateDeNaissance:Date;

  constructor(pseudo:string, motDePasse:string, email:string, dateDeNaissance:Date){
    this.pseudo = pseudo;
    this.motDePasse = motDePasse;
    this.email = email;
    this.dateDeNaissance = dateDeNaissance;


  }
}
