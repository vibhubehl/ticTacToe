export enum GameType {
    multiPlayer = "multiPlayer",
    singlePlayer = "singlePlayer",
    notSelected = "notSelected"
}

export type multiplayerInfo = {
    gameID: number,
    playerID: number
}