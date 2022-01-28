import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { ServicejeuService } from '../servicejeu.service';
import { Jeu } from '../jeu.model';

@Component({
  selector: 'app-ajouter-jeu',
  templateUrl: './ajouter-jeu.component.html',
  styleUrls: ['./ajouter-jeu.component.css']
})
export class AjouterJeuComponent implements OnInit {
  jeu = new Jeu('', '', new Date, {}, {}, []);

  editeurs = [
    {id:1, nom:'Editis'},
    {id:2, nom:'Gallimard'}

  ];

  plateformes = [
    {id:1, nom:'Switch'},
    {id:2, nom:'PS5'}

  ];

  genres = [
    {id:1, nom:'FPS'},
    {id:2, nom:'GTP'},
  ];

  classifications= [
    {id:1, nom:'PEGI 12'},
    {id:2, nom:'PEGI 16'}

  ];

   modeleEconomiques = [
    {id:1, nom:'play to play'},
    {id:2, nom:'free to play'}

  ];

  editeur = this.editeurs;
  genre = this.genres;
  platforme = this.plateformes;
  classification = this.classifications;
  modeleEconomique = this.modeleEconomiques;


  constructor(private authService: AuthService, private router: Router, private postService: ServicejeuService) { }

  ngOnInit(): void {

  }

  ajouterJeu(jeu:Jeu){

    this.authService.isAdmin = true;
    this.router.navigate(['/boardmoderator']);
    // this.postService.postJeu(jeu);
    // this.postService.postJeu();
    return this.postService.postJeu(this.jeu);

  }

  onSubmit() {
    console.log(this.jeu);
    this.ajouterJeu(this.jeu);
  }


  // getJeu() {
  //   return this.postService.getJeu();
  // }

  // deleteGame(jeu:Jeu) {
  //   return this.ListAvisGamingComponent.supprimerJeu(jeu);
  // }

  // getjeu(id:number) {
  //   return this.postService.getJeu(id);
  // }

  // addGame(game:Game) {
  //   return this.httpService.addGame(game)
  //}
}
