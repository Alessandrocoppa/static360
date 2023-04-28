import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SerieAComponent } from './pages/serie-a/serie-a.component';
import { PremierLeagueComponent } from './pages/premier-league/premier-league.component';
import { LaLigaComponent } from './pages/la-liga/la-liga.component';
import { BundesligaComponent } from './pages/bundesliga/bundesliga.component';
import { Ligue1Component } from './pages/ligue1/ligue1.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'seriea',
    component: SerieAComponent
  },
  {
    path: 'premier-league',
    component: PremierLeagueComponent
  },
  {
    path: 'laliga',
    component: LaLigaComponent
  },
  {
    path: 'bundesliga',
    component: BundesligaComponent
  },
  {
    path: 'ligue1',
    component: Ligue1Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
