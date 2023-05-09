import { Component, OnInit } from '@angular/core';
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
  season!:string 
  nomeCampionato!:string;
  classifica!:Classifica
  squadre!:squadre[] 
  punti!: number;
  colonneMostrate:string[] = ['posizione','squadra','pg','punti','vittorie','pareggi','sconfitte','gd','gf','gs']

  constructor(private api:ApiService, private route:ActivatedRoute, private idCampionato: IdcampionatoService){ this.trovaID(), this.creaFakeClassifica()}

  public trovaID() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
      this.season = this.idCampionato.season
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
      this.creaFakeClassifica()
    });
  }

  trovaSeason(){
    
      
  }
  

  creaFakeClassifica(){
    
    this.classifica = this.api.getFakeSeriea().response[0].league
          console.log(this.classifica)
      
          this.squadre = this.classifica.standings[0]
          console.log(this.squadre)
        }
        

  
  // creaClassifica(){
    
    //    this.api.getStandings(this.id).subscribe((res)=>{
      //     console.log(res)
      //     this.classifica = res.response[0].league
      //     console.log(this.classifica)
      //     this.squadre = this.classifica.standings[0]
      //     console.log(this.squadre)
      //   })
      //   }
    
    
    
  }