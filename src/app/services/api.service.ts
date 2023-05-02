import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private API_URL:string = "https://v3.football.api-sports.io/"

  getSeriea(){
    return this.http.get<any>(this.API_URL + 'leagues/',{
      params:{
        id: "135"
      },
      headers:{
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "6de9befcba2e078d3784aa7243cef899"
      }
    })
  }

  getPremier(){
    return this.http.get<any>(this.API_URL + 'standings/',{
      params:{
        league: "39",
        season: "2022"
      },
      headers:{
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "6de9befcba2e078d3784aa7243cef899"
      }
    })
  }

  getBundesliga(){
    return this.http.get<any>(this.API_URL + 'leagues/',{
      params:{
        id: "78"
      },
      headers:{
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "6de9befcba2e078d3784aa7243cef899"
      }
    })
  }

  getLaLiga(){
    return this.http.get<any>(this.API_URL + 'leagues/',{
      params:{
        id: "140"
      },
      headers:{
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "6de9befcba2e078d3784aa7243cef899"
      }
    })
  }

  getLigue1(){
    return this.http.get<any>(this.API_URL + 'leagues/',{
      params:{
        id: "61"
      },
      headers:{
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "6de9befcba2e078d3784aa7243cef899"
      }
    })
  }

  getStandings(){
    return this.http.get<any>(this.API_URL + 'standings',{
      params:{
        league: "135",
        season: "2022"
      },
      headers:{
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "6de9befcba2e078d3784aa7243cef899"
      }
    })
  }


  getFakeClassifica():any{
    return {"get":"standings","parameters":{"league":"135","season":"2022"},"errors":[],"results":1,"paging":{"current":1,"total":1},"response":[{"league":{"id":135,"name":"Serie A","country":"Italy","logo":"https:\/\/media-1.api-sports.io\/football\/leagues\/135.png","flag":"https:\/\/media-1.api-sports.io\/flags\/it.svg","season":2022,"standings":[[{"rank":1,"team":{"id":492,"name":"Napoli","logo":"https:\/\/media-1.api-sports.io\/football\/teams\/492.png"},"points":79,"goalsDiff":46,"group":"Serie A","form":"DWDWL","status":"same","description":"Promotion - Champions League (Group Stage: )","all":{"played":32,"win":25,"draw":4,"lose":3,"goals":{"for":68,"against":22}},"home":{"played":16,"win":11,"draw":3,"lose":2,"goals":{"for":34,"against":14}},"away":{"played":16,"win":14,"draw":1,"lose":1,"goals":{"for":34,"against":8}},"update":"2023-04-30T00:00:00+00:00"},{"rank":2,"team":{"id":487,"name":"Lazio","logo":"https:\/\/media-3.api-sports.io\/football\/teams\/487.png"},"points":61,"goalsDiff":26,"group":"Serie A","form":"LLWWW","status":"same","description":"Promotion - Champions League (Group Stage: )","all":{"played":32,"win":18,"draw":7,"lose":7,"goals":{"for":50,"against":24}},"home":{"played":16,"win":9,"draw":3,"lose":4,"goals":{"for":25,"against":14}},"away":{"played":16,"win":9,"draw":4,"lose":3,"goals":{"for":25,"against":10}},"update":"2023-04-30T00:00:00+00:00"},{"rank":3,"team":{"id":496,"name":"Juventus","logo":"https:\/\/media-1.api-sports.io\/football\/teams\/496.png"},"points":60,"goalsDiff":21,"group":"Serie A","form":"DLLLW","status":"same","description":"Promotion - Champions League (Group Stage: )","all":{"played":32,"win":18,"draw":6,"lose":8,"goals":{"for":48,"against":27}},"home":{"played":16,"win":11,"draw":3,"lose":2,"goals":{"for":34,"against":13}},"away":{"played":16,"win":7,"draw":3,"lose":6,"goals":{"for":14,"against":14}},"update":"2023-04-30T00:00:00+00:00"},{"rank":4,"team":{"id":505,"name":"Inter","logo":"https:\/\/media-3.api-sports.io\/football\/teams\/505.png"},"points":57,"goalsDiff":19,"group":"Serie A","form":"WWLDL","status":"same","description":"Promotion - Champions League (Group Stage: )","all":{"played":32,"win":18,"draw":3,"lose":11,"goals":{"for":54,"against":35}},"home":{"played":17,"win":12,"draw":0,"lose":5,"goals":{"for":30,"against":10}},"away":{"played":15,"win":6,"draw":3,"lose":6,"goals":{"for":24,"against":25}},"update":"2023-04-30T00:00:00+00:00"},{"rank":5,"team":{"id":489,"name":"AC Milan","logo":"https:\/\/media-2.api-sports.io\/football\/teams\/489.png"},"points":57,"goalsDiff":14,"group":"Serie A","form":"DWDDW","status":"same","description":"Promotion - Europa League (Group Stage: )","all":{"played":32,"win":16,"draw":9,"lose":7,"goals":{"for":52,"against":38}},"home":{"played":15,"win":10,"draw":3,"lose":2,"goals":{"for":30,"against":17}},"away":{"played":17,"win":6,"draw":6,"lose":5,"goals":{"for":22,"against":21}},"update":"2023-04-30T00:00:00+00:00"},{"rank":6,"team":{"id":497,"name":"AS Roma","logo":"https:\/\/media-2.api-sports.io\/football\/teams\/497.png"},"points":57,"goalsDiff":14,"group":"Serie A","form":"DLWWW","status":"same","description":"Promotion - Europa Conference League (Qualification: )","all":{"played":32,"win":17,"draw":6,"lose":9,"goals":{"for":44,"against":30}},"home":{"played":16,"win":10,"draw":2,"lose":4,"goals":{"for":24,"against":10}},"away":{"played":16,"win":7,"draw":4,"lose":5,"goals":{"for":20,"against":20}},"update":"2023-04-30T00:00:00+00:00"},{"rank":7,"team":{"id":499,"name":"Atalanta","logo":"https:\/\/media-3.api-sports.io\/football\/teams\/499.png"},"points":55,"goalsDiff":16,"group":"Serie A","form":"WWDLW","status":"same","description":null,"all":{"played":32,"win":16,"draw":7,"lose":9,"goals":{"for":53,"against":37}},"home":{"played":15,"win":7,"draw":3,"lose":5,"goals":{"for":27,"against":19}},"away":{"played":17,"win":9,"draw":4,"lose":4,"goals":{"for":26,"against":18}},"update":"2023-04-30T00:00:00+00:00"},{"rank":8,"team":{"id":500,"name":"Bologna","logo":"https:\/\/media-3.api-sports.io\/football\/teams\/500.png"},"points":45,"goalsDiff":1,"group":"Serie A","form":"DLDWW","status":"same","description":null,"all":{"played":32,"win":12,"draw":9,"lose":11,"goals":{"for":41,"against":40}},"home":{"played":17,"win":7,"draw":7,"lose":3,"goals":{"for":22,"against":12}},"away":{"played":15,"win":5,"draw":2,"lose":8,"goals":{"for":19,"against":28}},"update":"2023-04-30T00:00:00+00:00"},{"rank":9,"team":{"id":502,"name":"Fiorentina","logo":"https:\/\/media-3.api-sports.io\/football\/teams\/502.png"},"points":45,"goalsDiff":6,"group":"Serie A","form":"WLDDW","status":"same","description":null,"all":{"played":32,"win":12,"draw":9,"lose":11,"goals":{"for":42,"against":36}},"home":{"played":17,"win":7,"draw":6,"lose":4,"goals":{"for":26,"against":21}},"away":{"played":15,"win":5,"draw":3,"lose":7,"goals":{"for":16,"against":15}},"update":"2023-04-30T00:00:00+00:00"},{"rank":10,"team":{"id":1579,"name":"Monza","logo":"https:\/\/media-1.api-sports.io\/football\/teams\/1579.png"},"points":44,"goalsDiff":-3,"group":"Serie A","form":"WWWDL","status":"same","description":null,"all":{"played":32,"win":12,"draw":8,"lose":12,"goals":{"for":40,"against":43}},"home":{"played":16,"win":6,"draw":4,"lose":6,"goals":{"for":22,"against":20}},"away":{"played":16,"win":6,"draw":4,"lose":6,"goals":{"for":18,"against":23}},"update":"2023-04-30T00:00:00+00:00"},{"rank":11,"team":{"id":488,"name":"Sassuolo","logo":"https:\/\/media-3.api-sports.io\/football\/teams\/488.png"},"points":43,"goalsDiff":-7,"group":"Serie A","form":"WLWLD","status":"same","description":null,"all":{"played":32,"win":12,"draw":7,"lose":13,"goals":{"for":40,"against":47}},"home":{"played":16,"win":8,"draw":3,"lose":5,"goals":{"for":21,"against":17}},"away":{"played":16,"win":4,"draw":4,"lose":8,"goals":{"for":19,"against":30}},"update":"2023-04-30T00:00:00+00:00"},{"rank":12,"team":{"id":503,"name":"Torino","logo":"https:\/\/media-3.api-sports.io\/football\/teams\/503.png"},"points":42,"goalsDiff":-5,"group":"Serie A","form":"LWDLD","status":"same","description":null,"all":{"played":32,"win":11,"draw":9,"lose":12,"goals":{"for":33,"against":38}},"home":{"played":16,"win":5,"draw":5,"lose":6,"goals":{"for":13,"against":16}},"away":{"played":16,"win":6,"draw":4,"lose":6,"goals":{"for":20,"against":22}},"update":"2023-04-30T00:00:00+00:00"},{"rank":13,"team":{"id":494,"name":"Udinese","logo":"https:\/\/media-3.api-sports.io\/football\/teams\/494.png"},"points":42,"goalsDiff":2,"group":"Serie A","form":"LWLDL","status":"same","description":null,"all":{"played":32,"win":10,"draw":12,"lose":10,"goals":{"for":42,"against":40}},"home":{"played":15,"win":5,"draw":8,"lose":2,"goals":{"for":27,"against":17}},"away":{"played":17,"win":5,"draw":4,"lose":8,"goals":{"for":15,"against":23}},"update":"2023-04-30T00:00:00+00:00"},{"rank":14,"team":{"id":514,"name":"Salernitana","logo":"https:\/\/media-3.api-sports.io\/football\/teams\/514.png"},"points":34,"goalsDiff":-13,"group":"Serie A","form":"DWDDD","status":"same","description":null,"all":{"played":32,"win":7,"draw":13,"lose":12,"goals":{"for":38,"against":51}},"home":{"played":16,"win":5,"draw":5,"lose":6,"goals":{"for":23,"against":21}},"away":{"played":16,"win":2,"draw":8,"lose":6,"goals":{"for":15,"against":30}},"update":"2023-04-30T00:00:00+00:00"},{"rank":15,"team":{"id":511,"name":"Empoli","logo":"https:\/\/media-3.api-sports.io\/football\/teams\/511.png"},"points":32,"goalsDiff":-16,"group":"Serie A","form":"LLLDW","status":"same","description":null,"all":{"played":32,"win":7,"draw":11,"lose":14,"goals":{"for":26,"against":42}},"home":{"played":15,"win":5,"draw":4,"lose":6,"goals":{"for":13,"against":18}},"away":{"played":17,"win":2,"draw":7,"lose":8,"goals":{"for":13,"against":24}},"update":"2023-04-30T00:00:00+00:00"},{"rank":16,"team":{"id":867,"name":"Lecce","logo":"https:\/\/media-3.api-sports.io\/football\/teams\/867.png"},"points":31,"goalsDiff":-11,"group":"Serie A","form":"WLDLL","status":"same","description":null,"all":{"played":32,"win":7,"draw":10,"lose":15,"goals":{"for":27,"against":38}},"home":{"played":16,"win":3,"draw":7,"lose":6,"goals":{"for":16,"against":20}},"away":{"played":16,"win":4,"draw":3,"lose":9,"goals":{"for":11,"against":18}},"update":"2023-04-30T00:00:00+00:00"},{"rank":17,"team":{"id":515,"name":"Spezia","logo":"https:\/\/media-3.api-sports.io\/football\/teams\/515.png"},"points":27,"goalsDiff":-25,"group":"Serie A","form":"LDLDD","status":"same","description":null,"all":{"played":32,"win":5,"draw":12,"lose":15,"goals":{"for":26,"against":51}},"home":{"played":17,"win":3,"draw":8,"lose":6,"goals":{"for":16,"against":26}},"away":{"played":15,"win":2,"draw":4,"lose":9,"goals":{"for":10,"against":25}},"update":"2023-04-30T00:00:00+00:00"},{"rank":18,"team":{"id":504,"name":"Verona","logo":"https:\/\/media-2.api-sports.io\/football\/teams\/504.png"},"points":27,"goalsDiff":-18,"group":"Serie A","form":"DWDWL","status":"same","description":"Relegation - Serie B","all":{"played":32,"win":6,"draw":9,"lose":17,"goals":{"for":27,"against":45}},"home":{"played":16,"win":6,"draw":2,"lose":8,"goals":{"for":19,"against":24}},"away":{"played":16,"win":0,"draw":7,"lose":9,"goals":{"for":8,"against":21}},"update":"2023-04-30T00:00:00+00:00"},{"rank":19,"team":{"id":520,"name":"Cremonese","logo":"https:\/\/media-3.api-sports.io\/football\/teams\/520.png"},"points":20,"goalsDiff":-30,"group":"Serie A","form":"DLWWL","status":"same","description":"Relegation - Serie B","all":{"played":32,"win":3,"draw":11,"lose":18,"goals":{"for":28,"against":58}},"home":{"played":16,"win":2,"draw":4,"lose":10,"goals":{"for":10,"against":26}},"away":{"played":16,"win":1,"draw":7,"lose":8,"goals":{"for":18,"against":32}},"update":"2023-04-30T00:00:00+00:00"},{"rank":20,"team":{"id":498,"name":"Sampdoria","logo":"https:\/\/media-1.api-sports.io\/football\/teams\/498.png"},"points":17,"goalsDiff":-37,"group":"Serie A","form":"LDDLL","status":"same","description":"Relegation - Serie B","all":{"played":32,"win":3,"draw":8,"lose":21,"goals":{"for":20,"against":57}},"home":{"played":16,"win":1,"draw":5,"lose":10,"goals":{"for":9,"against":23}},"away":{"played":16,"win":2,"draw":3,"lose":11,"goals":{"for":11,"against":34}},"update":"2023-04-30T00:00:00+00:00"}]]}}]}
  }
}
