import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Giocatore } from 'src/app/interfaces/giocatore';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-top-yellow-card',
  templateUrl: './top-yellow-card.component.html',
  styleUrls: ['./top-yellow-card.component.css']
})
export class TopYellowCardComponent {

  loading:boolean = true
  id!:string
  nomeCampionato!:string;
  giocatori!:Giocatore[]
  colonneMostrate:string[] = ['nome','squadra','yellow']
  
  constructor(private api:ApiService, private route:ActivatedRoute){ this.creaYellow()}

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
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
      this.creaYellow()
    });
  }

  creaYellow(){
    this.giocatori = this.api.getFakeYellow().response
    console.log(this.giocatori)
  }
  
  // creaYellow(){
  //   this.api.getYellowCard(this.id).subscribe((res)=>{
  //     console.log(res)
  //   this.giocatori = res.response
  //     console.log(this.giocatori)
  //   })
  // }
}



