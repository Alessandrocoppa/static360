import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private API_URL:string = "https://v3.football.api-sports.io/"

  getCampionato(id:string){
    return this.http.get<any>(this.API_URL + 'leagues/',{
      params:{
        id: id
      },
      headers:{
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "6de9befcba2e078d3784aa7243cef899"
      }
    })
  }

  getStandings(id:string){
    return this.http.get<any>(this.API_URL + 'standings',{
      params:{
        league: id,
        season: "2022"
      },
      headers:{
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "6de9befcba2e078d3784aa7243cef899"
      }
    })
  }


}
