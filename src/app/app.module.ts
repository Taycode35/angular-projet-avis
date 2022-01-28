import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardPlayerComponent } from './board-player/board-player.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ListAvisModeratorComponent } from './list-avis-moderator/list-avis-moderator.component';
import { ListAvisGamingComponent } from './list-avis-gaming/list-avis-gaming.component';
import { ListAvisPlayerComponent } from './list-avis-player/list-avis-player.component';
import { AjouterJeuComponent } from './ajouter-jeu/ajouter-jeu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardPlayerComponent,
    ListAvisModeratorComponent,
    ListAvisGamingComponent,
    ListAvisPlayerComponent,
    AjouterJeuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
