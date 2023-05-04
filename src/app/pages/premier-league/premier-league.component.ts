import { Component } from '@angular/core';
import { Classifica } from 'src/app/interfaces/classifica';
import { squadre } from 'src/app/interfaces/squadre';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-premier-league',
  templateUrl: './premier-league.component.html',
  styleUrls: ['./premier-league.component.css']
})
export class PremierLeagueComponent {

  classifica!:Classifica
  squadre!:squadre[] 
  punti!: number;
  colonneMostrate:string[] = ['posizione','squadra','pg','punti','vittorie','pareggi','sconfitte','gd','gf','gs']

  constructor(private api:ApiService){this.trovaPremier(), this.creaClassifica() }

  trovaPremier(){
    this.api.getCampionato("39").subscribe((res)=>{
      console.log(res)
    })
  }

  creaClassifica(){
    this.api.getStandings("39").subscribe((res)=>{
      console.log(res)
      this.classifica = res.response[0].league
      console.log(this.classifica)
      this.squadre = this.classifica.standings[0]
      console.log(this.squadre)
    })
  }

}
