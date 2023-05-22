import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Classifica } from 'src/app/interfaces/classifica';
import { Giocatore } from 'src/app/interfaces/giocatore';
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
  giocatori!:Giocatore[]
  classifica!:Classifica
  squadre:squadre[] = []
  colonneMostrate:string[] = ['posizione','squadra','pg','punti']
  colonneMostrate2:string[] = ['nome','squadra','goals']
  colonneMostrate3:string[] = ['nome','squadra','assists']
  datiTabella: any;
  squadra: any;
  datiTabella2: any;
  datiTabella3: any;
  datiTabella4: any;
  datiTabella5: any;
  datiTabella11: any;
  datiTabella12: any;
  datiTabella21: any;
  datiTabella22: any;
  datiTabella31: any;
  datiTabella32: any;

  constructor(private api:ApiService){  
    this.creaSerieA(),
    this.creaTopScorerIT(),
    this.creaTopAssistsIT(),
    this.creaPremier(),
    this.creaTopScorerEN(),
    this.creaTopAssistsEN(),
    this.creaLiga(),
    this.creaTopScorerSP(),
    this.creaTopAssistsSP()
    }

    creaSerieA(){
    
      this.classifica = this.api.getFakeSeriea().response[0].league
            console.log(this.classifica)
        
            this.squadre = this.classifica.standings[0]
            this.squadre = this.squadre.slice(0,4)
            this.squadre.sort((a, b)=>a.rank - b.rank)
            this.datiTabella = new MatTableDataSource(this.squadre)
            console.log(this.squadre)
          }

          creaTopScorerIT(){
            this.giocatori = this.api.getFakeScorer().response
              console.log(this.giocatori)
              this.giocatori = this.giocatori.slice(0,4)
              this.datiTabella11 = new MatTableDataSource(this.giocatori)
            }

          creaTopAssistsIT(){
              this.giocatori = this.api.getFakeAssists().response
                console.log(this.giocatori)
                this.giocatori = this.giocatori.slice(0,4)
                this.datiTabella12 = new MatTableDataSource(this.giocatori)
              }

    // creaSerieA(){  
    //   this.api.getStandings("135").subscribe((res)=>{
    //      console.log(res)
    //      this.classifica = res.response[0].league
    //      console.log(this.classifica)
    //      this.squadre = this.classifica.standings[0]
    //      this.squadre = this.squadre.slice(0,4)
    //      this.datiTabella = new MatTableDataSource(this.squadre)
    //      this.squadre.sort((a, b)=>a.rank - b.rank)
    //      this.datiTabella = new MatTableDataSource(this.squadre)
    //      console.log(this.squadre)
    //    })
    //    }

    // creaTopScorerIT(){
    //     this.api.getTopScorer().subscribe((res)=>{
    //       console.log(res)
    //     this.giocatori = res.response
    //       console.log(this.giocatori)
    //       this.datiTabella = new MatTableDataSource(this.giocatori)
    //           // this.goals.sort((a:any, b:any)=>a.total - b.total)
    //           // this.datiTabella = new MatTableDataSource(this.giocatori)
    //           // console.log(this.giocatori)
    //     })
    //   }

  //   creaTopAssistsIT(){
//   this.api.getTopAssists().subscribe((res)=>{
//     console.log(res)
//   this.giocatori = res.response
//     console.log(this.giocatori)
//     this.datiTabella = new MatTableDataSource(this.giocatori)
//   })
// }
    
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

    creaTopScorerEN(){
        this.api.getTopScorer("39").subscribe((res)=>{
          console.log(res)
        this.giocatori = res.response
          console.log(this.giocatori)
          this.giocatori = this.giocatori.slice(0,4)
          this.datiTabella21 = new MatTableDataSource(this.giocatori)
        })
      }
    
      creaTopAssistsEN(){
          this.api.getTopAssists("39").subscribe((res)=>{
            console.log(res)
          this.giocatori = res.response
            console.log(this.giocatori)
            this.giocatori = this.giocatori.slice(0,4)
            this.datiTabella22 = new MatTableDataSource(this.giocatori)
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
           })
           }

           creaTopScorerSP(){
            this.api.getTopScorer("140").subscribe((res)=>{
              console.log(res)
            this.giocatori = res.response
              console.log(this.giocatori)
              this.giocatori = this.giocatori.slice(0,4)
              this.datiTabella31 = new MatTableDataSource(this.giocatori)
            })
          }
        
          creaTopAssistsSP(){
              this.api.getTopAssists("140").subscribe((res)=>{
                console.log(res)
              this.giocatori = res.response
                console.log(this.giocatori)
                this.giocatori = this.giocatori.slice(0,4)
                this.datiTabella32 = new MatTableDataSource(this.giocatori)
              })
            }
    
           
}
