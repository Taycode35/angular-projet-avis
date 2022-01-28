import { Component, OnInit } from '@angular/core';
import { ServiceavisService } from '../serviceavis.service';
import { Avis } from '../avis';
import { Joueur } from '../joueur.model';
import { Jeu } from '../jeu.model';
import { Moderateur } from '../moderateur.model';

@Component({
  selector: 'app-list-avis-player',
  templateUrl: './list-avis-player.component.html',
  styleUrls: ['./list-avis-player.component.css']
})
export class ListAvisPlayerComponent implements OnInit {
  avis:Avis[] = [];
  constructor(private service:ServiceavisService) {
    //this.avis.push(new Avis(2, "test insertion", "2022-01-20", "dffggffg", 15, new Joueur(), new Jeu(), new Moderateur()));


  }

  ngOnInit(): void {

    this.service.getAvis().subscribe(avis =>{
    this.avis = avis;
    //this.service.getJoueur().subscribe(joueur=>{

      // })

     });
    console.log(this.avis);
  }

}
