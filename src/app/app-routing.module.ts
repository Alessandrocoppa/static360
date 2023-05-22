import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SerieAComponent } from './Unused/serie-a/serie-a.component';
import { PremierLeagueComponent } from './Unused/premier-league/premier-league.component';
import { LaLigaComponent } from './Unused/la-liga/la-liga.component';
import { BundesligaComponent } from './Unused/bundesliga/bundesliga.component';
import { Ligue1Component } from './Unused/ligue1/ligue1.component';
import { ClassificaComponent } from './components/classifica/classifica.component';
import { TopScorersComponent } from './components/top-scorers/top-scorers.component';
import { TopAssistsComponent } from './components/top-assists/top-assists.component';
import { TopYellowCardComponent } from './components/top-yellow-card/top-yellow-card.component';
import { TopRedCardComponent } from './components/top-red-card/top-red-card.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "classifica/:id",
    component: ClassificaComponent
  },
  {
    path: "goalscorers/:id",
    component: TopScorersComponent
  },
  {
    path: "topassists/:id",
    component: TopAssistsComponent
  },
  {
    path: "yellowcard/:id",
    component: TopYellowCardComponent
  },
  {
    path: "redcard/:id",
    component: TopRedCardComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
