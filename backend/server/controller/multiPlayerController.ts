import { PanelType, Player, Multiplayer } from "../database/models";

export type GameInfo = {
    id: string,
    Player: Player,
    board: string,
    currentPlayer: string,
  }

export async function getGameID(): Promise<GameInfo> {
    var game: GameInfo;
    const gameInfo = await findExistingGame();    
    console.log("game", gameInfo);
    if(gameInfo === null){
        // create new game and assign player1
        const response = createNewGame();
        game = {
            id: response._id,
            Player: response.Player1,
            board: response.board,
            currentPlayer: response.CurrentPlayer,
        };
        console.log("create game", game);
    }
    else{
        // assign payer 2 an id and get game id for that game
        const response = updateExistingGame(gameInfo);
        game = {
            id: gameInfo._id,
            Player: gameInfo.Player2,
            board: gameInfo.board,
            currentPlayer: gameInfo.CurrentPlayer,
        };
    }
    return new Promise<GameInfo>((resolve) => {
        resolve(game);
    });
}

// helper methods
export async function findExistingGame(): Promise<any> { 
    const res = await Multiplayer.findOne({
        Player2: null
    });
    // query DB for any game session with undefined player2
    return new Promise<any>((resolve) => {
        resolve(res);
    });
}

export function createNewGame() {
    const game = new Multiplayer(
        {
        Player1:{
            Type: PanelType.zero,
            ID: 1
        },
        Board: "---------",
        CurrentPlayer: PanelType.zero,
        }
    );
    game.save();
    return game;
}

export async function updateExistingGame(mongoObj: any): Promise<any> { 
    const res = await Multiplayer.updateOne({"_id": mongoObj._id}, 
        {
            Player2: {
            Type: PanelType.cross,
            ID: 2
            }
        }
    );
}