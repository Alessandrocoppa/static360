import { Component } from '@angular/core';
import { Classifica } from 'src/app/interfaces/classifica';
import { squadre } from 'src/app/interfaces/squadre';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-serie-a',
  templateUrl: './serie-a.component.html',
  styleUrls: ['./serie-a.component.css']
})
export class SerieAComponent {

  classifica!:Classifica
  squadre!:squadre[] 
  punti!: number;
  colonneMostrate:string[] = ['posizione','squadra','pg','punti','vittorie','pareggi','sconfitte','gd','gf','gs']

  constructor(private api:ApiService){ this.creaClassifica(), this.trovaSeriea()}


  trovaSeriea(){
    this.api.getSeriea().subscribe((res)=>{
      console.log(res)
    })
  }

creaClassifica(){
  this.classifica = this.api.getFakeClassifica().response[0].league
  console.log(this.classifica)

  this.squadre = this.classifica.standings[0]
  console.log(this.squadre)

  this.punti = this.squadre[0].points
  console.log(this.punti)
  }
}

