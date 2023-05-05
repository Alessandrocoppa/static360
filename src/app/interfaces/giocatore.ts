export interface Giocatore {
    player: {
        id:number;
        name:string;
        photo: string;
    }

    statistics: [{
        goals:{
            total:number
        }
        team:{
            logo:string;
            name:string;
        }}
    ]
}
