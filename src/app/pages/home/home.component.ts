import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Classifica } from 'src/app/interfaces/classifica';
import { squadre } from 'src/app/interfaces/squadre';
import { ApiService } from 'src/app/services/api.service';
import { IdcampionatoService } from 'src/app/services/idcampionato.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  id!:string
  seasons!:string[]
  season:string = "2022"
  nomeCampionato!:string;
  classifica!:Classifica
  squadre:squadre[] = []
  punti!: number;
  colonneMostrate:string[] = ['posizione','squadra','pg','punti','vittorie','pareggi','sconfitte','gd','gf','gs']
  datiTabella: any;
  squadra: any;
  datiTabella2: any;
  datiTabella3: any;
  datiTabella4: any;
  datiTabella5: any;

  constructor(private api:ApiService, private route:ActivatedRoute, private idCampionato: IdcampionatoService){  
    this.creaSerieA(),
    this.creaPremier(),
    this.creaLiga(),
    this.creaBundesliga(),
    this.creaLigue1()
    }

    creaSerieA(){
    
      this.api.getStandings("135").subscribe((res)=>{
         console.log(res)
         this.classifica = res.response[0].league
         console.log(this.classifica)
         this.squadre = this.classifica.standings[0]
         this.squadre = this.squadre.slice(0,4)
         this.datiTabella = new MatTableDataSource(this.squadre)
         this.squadre.sort((a, b)=>a.rank - b.rank)
         this.datiTabella = new MatTableDataSource(this.squadre)
         console.log(this.squadre)
       })
       }
    
       creaPremier(){
    
        this.api.getStandings("39").subscribe((res)=>{
           console.log(res)
           this.classifica = res.response[0].league
           console.log(this.classifica)
           this.squadre = this.classifica.standings[0]
           this.squadre = this.squadre.slice(0,4)
           this.datiTabella2 = new MatTableDataSource(this.squadre)
           this.squadre.sort((a, b)=>a.rank - b.rank)
           this.datiTabella2 = new MatTableDataSource(this.squadre)
           console.log(this.squadre)
         })
         }

         creaLiga(){
    
          this.api.getStandings("140").subscribe((res)=>{
             console.log(res)
             this.classifica = res.response[0].league
             console.log(this.classifica)
             this.squadre = this.classifica.standings[0]
             this.squadre = this.squadre.slice(0,4)
             this.datiTabella3 = new MatTableDataSource(this.squadre)
             this.squadre.sort((a, b)=>a.rank - b.rank)
             this.datiTabella3 = new MatTableDataSource(this.squadre)
             console.log(this.squadre)
           })
           }

           creaBundesliga(){
    
            this.api.getStandings("78").subscribe((res)=>{
               console.log(res)
               this.classifica = res.response[0].league
               console.log(this.classifica)
               this.squadre = this.classifica.standings[0]
               this.squadre = this.squadre.slice(0,4)
               this.datiTabella4 = new MatTableDataSource(this.squadre)
               this.squadre.sort((a, b)=>a.rank - b.rank)
               this.datiTabella4 = new MatTableDataSource(this.squadre)
               console.log(this.squadre)
             })
             }

             creaLigue1(){
    
              this.api.getStandings("61").subscribe((res)=>{
                 console.log(res)
                 this.classifica = res.response[0].league
                 console.log(this.classifica)
                 this.squadre = this.classifica.standings[0]
                 this.squadre = this.squadre.slice(0,4)
                 this.datiTabella5 = new MatTableDataSource(this.squadre)
                 this.squadre.sort((a, b)=>a.rank - b.rank)
                 this.datiTabella5 = new MatTableDataSource(this.squadre)
                 console.log(this.squadre)
               })
               }
          
}
