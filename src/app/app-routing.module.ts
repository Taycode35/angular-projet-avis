import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardPlayerComponent } from './board-player/board-player.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AjouterJeuComponent } from './ajouter-jeu/ajouter-jeu.component';
import { ListAvisGamingComponent } from './list-avis-gaming/list-avis-gaming.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'player', component: BoardPlayerComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'boardadmin', component: BoardAdminComponent},
  { path: 'boardmoderator', component:BoardModeratorComponent},
  { path: 'boardPlayer', component:BoardPlayerComponent},
  { path: 'listeJeu', component:ListAvisGamingComponent},
  { path: 'addGame', component:AjouterJeuComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
