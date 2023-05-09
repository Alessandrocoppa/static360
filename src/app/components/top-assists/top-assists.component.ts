import { Component } from '@angular/core';
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
  nomeCampionato!:string;
  giocatori!:Giocatore[]
  colonneMostrate:string[] = ['nome','squadra','assists']
  
  constructor(private api:ApiService, private route:ActivatedRoute, private idCampionato:IdcampionatoService){
    this.id = this.idCampionato.id,
    this.creaTopAssists()
  }

 

  creaTopAssists(){
    this.giocatori = this.api.getFakeAssists().response
      console.log(this.giocatori)
    }
  

//   creaTopAssists(){
//   this.api.getTopAssists(this.id).subscribe((res)=>{
//     console.log(res)
//   this.giocatori = res.response
//     console.log(this.giocatori)
//   })
// }
  }


