import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Classifica } from 'src/app/interfaces/classifica';
import { squadre } from 'src/app/interfaces/squadre';
import { ApiService } from 'src/app/services/api.service';
import { IdcampionatoService } from 'src/app/services/idcampionato.service';

@Component({
  selector: 'app-classifica',
  templateUrl: './classifica.component.html',
  styleUrls: ['./classifica.component.css']
})
export class ClassificaComponent{

  loading:boolean = true
  id!:string
  seasons!:string[]
  season:string = "2022"
  nomeCampionato!:string;
  classifica!:Classifica
  squadre:squadre[] = []
  punti!: number;
  colonneMostrate:string[] = ['posizione','squadra','pg','punti','vittorie','pareggi','sconfitte','gd','gf','gs']
  @Output() cambioSeason: EventEmitter<any> = new EventEmitter()
  datiTabella: any;

  constructor(private api:ApiService, private route:ActivatedRoute, private idCampionato: IdcampionatoService){ 
    this.trovaID(), 
    this.creaClassifica(),
    this.creaFakeSeason()}

  seasonScelta(season:any){
      this.season = season
      this.idCampionato.season = this.season
      this.creaClassifica() 
  }


  public trovaID() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.idCampionato.id = this.id
      if(this.id == "135"){
        this.nomeCampionato = "seriea"
        this.loading = false
      }
      else if(this.id == "39"){
        this.nomeCampionato = "premier-league"
        this.loading = false
      }
      else if(this.id == "140"){
        this.nomeCampionato = "laliga"
        this.loading = false
      }
      else if(this.id == "78"){
        this.nomeCampionato = "bundesliga"
        this.loading = false
      }
      else if(this.id == "61"){
        this.nomeCampionato = "ligue1"
        this.loading = false
      }
      console.log(this.nomeCampionato)
      this.creaClassifica()
    });
  }

  creaFakeSeason(){
    this.seasons = this.api.getFakeSeason().response
    console.log(this.seasons)
  }

  // trovaSeason(){
  //   this.api.getSeason().subscribe((res)=>{
  //     console.log(res)
  //     this.season = res.response
  //     console.log(this.season)
  //   })
    
  // }
  

  // creaClassifica(){
    
  //   this.classifica = this.api.getFakeSeriea().response[0].league
  //         console.log(this.classifica)
      
  //         this.squadre = this.classifica.standings[0]
  //         this.squadre.sort((a, b)=>a.rank - b.rank)
  //         this.datiTabella = new MatTableDataSource(this.squadre)
  //         console.log(this.squadre)
  //       }
        

  
  creaClassifica(){
    
       this.api.getStandings(this.idCampionato.id).subscribe((res)=>{
          console.log(res)
          this.classifica = res.response[0].league
          console.log(this.classifica)
          this.squadre = this.classifica.standings[0]
          this.datiTabella = new MatTableDataSource(this.squadre)
          this.squadre.sort((a, b)=>a.rank - b.rank)
          this.datiTabella = new MatTableDataSource(this.squadre)
          console.log(this.squadre)
        })
        }
    
    
    
  }