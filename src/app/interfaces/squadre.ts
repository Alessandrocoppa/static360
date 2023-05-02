export interface squadre {

    rank: number,
    team: {
        id: number,
        name: string,
        logo: string
    },
    points: number,
    goalsDiff: number,
    group: string,
    form: string,
    all: {
        played: number,
        win: number,
        draw: number,
        lose: number,
        goals: {
            for: number,
            against: number
        }
    },
}
