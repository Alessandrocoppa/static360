import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
  season:string = "2022"
  nomeCampionato!:string;
  giocatori!:Giocatore[]
  colonneMostrate:string[] = ['nome','squadra','red']
  seasons!:string[]
  datiTabella: any;


  constructor(private api:ApiService, private route:ActivatedRoute, private idCampionato:IdcampionatoService){
    this.id = this.idCampionato.id,
    this.season = this.idCampionato.season,
    this.creaFakeSeason(),
    this.creaRedCard()}

     seasonScelta(season:any){
      this.season = season
      this.idCampionato.season = this.season
      this.creaRedCard() 
  }

  
  creaRedCard(){
    this.api.getRedCard().subscribe((res)=>{
      console.log(res)
    this.giocatori = res.response
      console.log(this.giocatori)
      this.datiTabella = new MatTableDataSource(this.giocatori)
    })
  }

  creaFakeSeason(){
    this.seasons = this.api.getFakeSeason().response
    console.log(this.seasons)
  }

  // creaFakeRed(){
  // this.giocatori = this.api.getFakeRed().response
  //   console.log(this.giocatori)
  // }
}




