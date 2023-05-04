import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BottoneCampionatiComponent } from './components/bottone-campionati/bottone-campionati.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { SerieAComponent } from './pages/serie-a/serie-a.component';
import { PremierLeagueComponent } from './pages/premier-league/premier-league.component';
import { LaLigaComponent } from './pages/la-liga/la-liga.component';
import { BundesligaComponent } from './pages/bundesliga/bundesliga.component';
import { Ligue1Component } from './pages/ligue1/ligue1.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table';
import { MenuPaginaComponent } from './components/menu-pagina/menu-pagina.component';

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
    MenuPaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
