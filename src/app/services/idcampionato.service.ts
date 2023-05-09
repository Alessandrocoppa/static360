import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdcampionatoService {

  private idCampionato!:string
  private seasonScelta:string = "2022"

  constructor() { }

  get season(){
    return this.seasonScelta
  }

  set season(seasonDaSettare:string){
    this.seasonScelta = seasonDaSettare
  }

  get id(){ 
    return this.idCampionato
  }

  set id(IdDaSettare : string){ 
    this.idCampionato = IdDaSettare
  }
    
  }
