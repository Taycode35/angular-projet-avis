import { Component, OnInit } from '@angular/core';
import { Avis } from '../avis';
import { ServiceavisService } from '../serviceavis.service';

@Component({
  selector: 'app-list-avis-moderator',
  templateUrl: './list-avis-moderator.component.html',
  styleUrls: ['./list-avis-moderator.component.css']
})
export class ListAvisModeratorComponent implements OnInit {
  avis:Avis[] = [];
  constructor(private service:ServiceavisService) {

  }

  ngOnInit(): void {

    this.service.getAvis().subscribe(avis =>{
    this.avis = avis;

    });
    console.log(this.avis);
    }
  }
