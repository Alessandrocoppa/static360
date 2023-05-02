import { squadre } from "./squadre"

export interface Classifica {
    country:string,
    flag:string,
    id:number,
    logo:string,
    name:string
    season:number

    standings:squadre[][]

}
