import { Component, OnInit } from '@angular/core';
import { ServicejeuService } from '../servicejeu.service';
import { Jeu } from '../jeu.model';

@Component({
  selector: 'app-list-avis-gaming',
  templateUrl: './list-avis-gaming.component.html',
  styleUrls: ['./list-avis-gaming.component.css']
})
export class ListAvisGamingComponent implements OnInit {

  jeu:Jeu[] = [];

  constructor(private service:ServicejeuService) { }

  ngOnInit(): void {
    this.service.getJeu().subscribe(data => this.jeu = data);
    //this.service.postJeu(jeu:Jeu).subscribe(data => this.jeu = data);
  }

}
