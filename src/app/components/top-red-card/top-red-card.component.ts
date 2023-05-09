import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Giocatore } from 'src/app/interfaces/giocatore';
import { ApiService } from 'src/app/services/api.service';
import { IdcampionatoService } from 'src/app/services/idcampionato.service';

@Component({
  selector: 'app-top-red-card',
  templateUrl: './top-red-card.component.html',
  styleUrls: ['./top-red-card.component.css']
})
export class TopRedCardComponent {

  loading:boolean = true
  id!:string
  nomeCampionato!:string;
  giocatori!:Giocatore[]
  colonneMostrate:string[] = ['nome','squadra','red']
  
  constructor(private api:ApiService, private route:ActivatedRoute, private idCampionato:IdcampionatoService){
    this.id = this.idCampionato.id,
     this.creaFakeRed()}

  
  // creaRedCard(){
  //   this.api.getRedCard(this.id).subscribe((res)=>{
  //     console.log(res)
  //   this.giocatori = res.response
  //     console.log(this.giocatori)
  //   })
  // }

  creaFakeRed(){
  this.giocatori = this.api.getFakeRed().response
    console.log(this.giocatori)
  }
}




