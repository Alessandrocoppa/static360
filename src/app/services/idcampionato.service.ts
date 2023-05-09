import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdcampionatoService {

  private idCampionato!:string 

  constructor() { }

  get id(){ 
    return this.idCampionato
  }

  set id(IdDaSettare : string){ 
    this.idCampionato = IdDaSettare
  }
    
  }
