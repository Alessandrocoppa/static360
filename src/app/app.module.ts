import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BottoneCampionatiComponent } from './components/bottone-campionati/bottone-campionati.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { SerieAComponent } from './Unused/serie-a/serie-a.component';
import { PremierLeagueComponent } from './Unused/premier-league/premier-league.component';
import { LaLigaComponent } from './Unused/la-liga/la-liga.component';
import { BundesligaComponent } from './Unused/bundesliga/bundesliga.component';
import { Ligue1Component } from './Unused/ligue1/ligue1.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table';
import { MenuPaginaComponent } from './components/menu-pagina/menu-pagina.component';
import { TopScorersComponent } from './components/top-scorers/top-scorers.component';
import { ClassificaComponent } from './components/classifica/classifica.component';
import { TopAssistsComponent } from './components/top-assists/top-assists.component';
import { TopYellowCardComponent } from './components/top-yellow-card/top-yellow-card.component';
import { TopRedCardComponent } from './components/top-red-card/top-red-card.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BottoneCampionatiComponent,
    HomeComponent,
    SerieAComponent,
    PremierLeagueComponent,
    LaLigaComponent,
    BundesligaComponent,
    Ligue1Component,
    FooterComponent,
    MenuPaginaComponent,
    TopScorersComponent,
    ClassificaComponent,
    TopAssistsComponent,
    TopYellowCardComponent,
    TopRedCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
