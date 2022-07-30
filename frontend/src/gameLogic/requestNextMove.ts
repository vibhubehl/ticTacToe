import { PanelType, boardType } from "../DTO/boardType";
import { GameType } from "../DTO/gameType";
import { convertBoardToString } from "./board";
import axios from "axios";

export async function requestNextMove (gameType: GameType, currentPlayer: PanelType, board: boardType): Promise<Error|Request> {
   var response: any;
   if (gameType === GameType.singlePlayer) {
    response = await requestNextMoveSinglePlayer(gameType, currentPlayer, board);
   }
    return response.json();
};

export async function requestNextMoveSinglePlayer (gameType: GameType, currentPlayer: PanelType, board: boardType): Promise<Error|Request> {
    const options = {
		method: 'Post',
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			"playerType": currentPlayer,
			"game": convertBoardToString(board),
		})
	};
    const response = await fetch('http://localhost:3001/getNextMove/' + gameType, options);
    return response.json();
};

export async function gameInit (gameType: GameType, setCurrentPlayer: Function, board: boardType, setmultiPlayer: Function, setmyPlayerType: Function): Promise<void> {

    if (gameType === GameType.singlePlayer) {
        setCurrentPlayer(PanelType.zero);
        setmyPlayerType(PanelType.zero)
    }
    else if (gameType === GameType.multiPlayer) {
        const response = axios.get('https://9f4c9738-2f7e-4cf6-b316-d9ace1ddbb65.mock.pstmn.io/multiplayerinit');
        const data = (await response).data;
        setCurrentPlayer(PanelType.zero);
        setmyPlayerType(data.currentPlayer)
        setmultiPlayer({
            playerID: data.playerID,
            gameID: data.gameID
        })
    }
};