import { PanelType, boardType } from "../DTO/boardType";
import { GameType } from "../DTO/gameType";
import { convertBoardToString } from "./board";

export async function requestNextMove (gameType: GameType, currentPlayer: PanelType, board: boardType) {
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
    const temp = await fetch('http://localhost:3001/getNextMove/', options)
    return temp.json();
};
