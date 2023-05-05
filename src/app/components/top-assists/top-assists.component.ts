import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Giocatore } from 'src/app/interfaces/giocatore';
import { ApiService } from 'src/app/services/api.service';

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
  
  constructor(private api:ApiService, private route:ActivatedRoute){ this.creaTopAssists()}

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
      this.creaTopAssists()
    });
  }

  creaTopAssists(){
    this.giocatori = this.api.getFakeAssists().response
      console.log(this.giocatori)
    }
  }

//   creaTopAssists(){
//   this.api.getTopAssists(this.id).subscribe((res)=>{
//     console.log(res)
//   this.giocatori = res.response
//     console.log(this.giocatori)
//   })
// }




