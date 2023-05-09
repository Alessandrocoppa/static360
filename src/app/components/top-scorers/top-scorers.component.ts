import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Giocatore } from 'src/app/interfaces/giocatore';
import { ApiService } from 'src/app/services/api.service';
import { IdcampionatoService } from 'src/app/services/idcampionato.service';

@Component({
  selector: 'app-top-scorers',
  templateUrl: './top-scorers.component.html',
  styleUrls: ['./top-scorers.component.css']
})
export class TopScorersComponent {

  loading:boolean = true
  id!:string
  nomeCampionato!:string;
  giocatori!:Giocatore[]
  colonneMostrate:string[] = ['nome','squadra','goals']
  season: string;
  
  constructor(private api:ApiService, private route:ActivatedRoute, private idCampionato:IdcampionatoService){
    this.id = this.idCampionato.id,
    this.season = this.idCampionato.season,
    this.creaTopScorer()}

  // creaTopScorer(){
  //   this.api.getTopScorer(this.id).subscribe((res)=>{
  //     console.log(res)
  //   this.giocatori = res.response
  //     console.log(this.giocatori)
  //   })
  // }

  creaTopScorer(){
  this.giocatori = this.api.getFakeScorer().response
    console.log(this.giocatori)
  }
}



