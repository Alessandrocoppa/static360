import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Giocatore } from 'src/app/interfaces/giocatore';
import { ApiService } from 'src/app/services/api.service';
import { IdcampionatoService } from 'src/app/services/idcampionato.service';

@Component({
  selector: 'app-top-scorers',
  templateUrl: './top-scorers.component.html',
  styleUrls: ['./top-scorers.component.css']
})
export class TopScorersComponent implements OnInit{

  loading:boolean = true
  @Input() id!:string
  nomeCampionato!:string;
  giocatori!:Giocatore[]
  colonneMostrate:string[] = ['nome','squadra','goals']
  season: string = "2022"
  seasons!:string[]
  datiTabella: any;
  @Input() mostraMeno: boolean = false
  
  constructor(private api:ApiService, private route:ActivatedRoute, private idCampionato:IdcampionatoService){ }
    
    ngOnInit(){
      if(this.id == undefined){
        this.id = this.idCampionato.id
      }
    
      this.season = this.idCampionato.season,
      this.creaFakeSeason(),
      this.creaTopScorer()
    }
  
    seasonScelta(season:any){
      this.season = season
      this.idCampionato.season = this.season
      this.creaTopScorer() 
  }

  creaTopScorer(){
    this.api.getTopScorer(this.idCampionato.id).subscribe((res)=>{
      console.log(res)
    this.giocatori = res.response
      console.log(this.giocatori)
      if(this.mostraMeno == true){
              this.tagliaGiocatori()
            }
      this.datiTabella = new MatTableDataSource(this.giocatori)
      this.loading = false
          // this.goals.sort((a:any, b:any)=>a.total - b.total)
          // this.datiTabella = new MatTableDataSource(this.giocatori)
          // console.log(this.giocatori)
    })
  }

  creaFakeSeason(){
    this.seasons = this.api.getFakeSeason().response
    console.log(this.seasons)
  }

//   creaTopScorer(){
//   this.giocatori = this.api.getFakeScorer().response
//     console.log(this.giocatori)
//     if(this.mostraMeno == true){
//       this.tagliaGiocatori()
//     }
//     this.datiTabella = new MatTableDataSource(this.giocatori)
//     this.loading = false
// }

  tagliaGiocatori(){
    this.giocatori = this.giocatori.slice(0,4)
    this.mostraMeno = true
  }
}



