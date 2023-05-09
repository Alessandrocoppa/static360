import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Giocatore } from 'src/app/interfaces/giocatore';
import { ApiService } from 'src/app/services/api.service';
import { IdcampionatoService } from 'src/app/services/idcampionato.service';

@Component({
  selector: 'app-top-yellow-card',
  templateUrl: './top-yellow-card.component.html',
  styleUrls: ['./top-yellow-card.component.css']
})
export class TopYellowCardComponent {

  loading:boolean = true
  id!:string
  nomeCampionato!:string;
  giocatori!:Giocatore[]
  colonneMostrate:string[] = ['nome','squadra','yellow']
  
  constructor(private api:ApiService, private route:ActivatedRoute, private idCampionato:IdcampionatoService){ 
    this.id = this.idCampionato.id,
    this.creaYellow()}

  

  creaYellow(){
    this.giocatori = this.api.getFakeYellow().response
    console.log(this.giocatori)
  }
  
  // creaYellow(){
  //   this.api.getYellowCard(this.id).subscribe((res)=>{
  //     console.log(res)
  //   this.giocatori = res.response
  //     console.log(this.giocatori)
  //   })
  // }
}



