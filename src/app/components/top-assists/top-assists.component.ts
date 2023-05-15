import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Giocatore } from 'src/app/interfaces/giocatore';
import { ApiService } from 'src/app/services/api.service';
import { IdcampionatoService } from 'src/app/services/idcampionato.service';

@Component({
  selector: 'app-top-assists',
  templateUrl: './top-assists.component.html',
  styleUrls: ['./top-assists.component.css']
})
export class TopAssistsComponent {

  loading:boolean = true
  id!:string
  season:string = "2022"
  nomeCampionato!:string;
  giocatori!:Giocatore[]
  colonneMostrate:string[] = ['nome','squadra','assists']
  seasons!:string[]
  datiTabella: any;
  
  constructor(private api:ApiService, private route:ActivatedRoute, private idCampionato:IdcampionatoService){
    this.id = this.idCampionato.id,
    this.season = this.idCampionato.season,
    this.creaFakeSeason(),
    this.creaTopAssists()
  }

  seasonScelta(season:any){
    this.season = season
    this.idCampionato.season = this.season
    this.creaTopAssists() 
}

  creaTopAssists(){
    this.giocatori = this.api.getFakeAssists().response
      console.log(this.giocatori)
      this.datiTabella = new MatTableDataSource(this.giocatori)
    }
  
  creaFakeSeason(){
      this.seasons = this.api.getFakeSeason().response
      console.log(this.seasons)
    }
  

//   creaTopAssists(){
//   this.api.getTopAssists().subscribe((res)=>{
//     console.log(res)
//   this.giocatori = res.response
//     console.log(this.giocatori)
//     this.datiTabella = new MatTableDataSource(this.giocatori)
//   })
// }
  }


