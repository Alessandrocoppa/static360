import { Component } from '@angular/core';
import { Classifica } from 'src/app/interfaces/classifica';
import { squadre } from 'src/app/interfaces/squadre';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ligue1',
  templateUrl: './ligue1.component.html',
  styleUrls: ['./ligue1.component.css']
})
export class Ligue1Component {

  classifica!:Classifica
  squadre!:squadre[] 
  punti!: number;
  colonneMostrate:string[] = ['posizione','squadra','pg','punti','vittorie','pareggi','sconfitte','gd','gf','gs']

  constructor(private api:ApiService){ this.creaClassifica(), this.trovaLigue1()}


  trovaLigue1(){
    // this.api.getCampionato("61").subscribe((res)=>{
    //   console.log(res)
    // })
  }

creaClassifica(){
  
  //  this.api.getStandings("61").subscribe((res)=>{
  //   console.log(res)
  //   this.classifica = res.response[0].league
  //   console.log(this.classifica)
  //   this.squadre = this.classifica.standings[0]
  //   console.log(this.squadre)
  // })
  
  }
}
