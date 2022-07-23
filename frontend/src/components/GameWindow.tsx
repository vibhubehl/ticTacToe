import React, { useEffect, useState} from 'react';
import { PanelType, ROW_VALUE, data, boardType, GameStatus } from "../DTO/boardType";
import { convertBoardToString, getIndexValue, getGameStatus } from "../gameLogic/board";
import { Panel } from "./Panel";
import '../assets/css/Panel.css';
import '../assets/css/Rainbow.css'
import { GameType, multiplayerInfo } from '../DTO/gameType';
import { gameInit, requestNextMove } from '../gameLogic/requestNextMove';

type GameWindowProps = {
	gameType: GameType
}

export function GameWindow (props: GameWindowProps) {
	// tracks who's turn it is X or 0
	const [currentPlayer, setCurrentPlayer] = useState(PanelType.zero);
	// tracks the board
	const [board, setBoard] = useState({} as boardType);
	const [gameStatus, setGameStatus] = useState(GameStatus.inProgress);
	const [multiPlayer, setmultiPlayer] = useState({} as multiplayerInfo)

	useEffect(() => {
		// update game status
		setGameStatus(getGameStatus(board));

		// cross/X is reseved for bot
		if(currentPlayer === PanelType.cross &&  gameStatus === GameStatus.inProgress){
			requestNextMove(props.gameType, currentPlayer, board).then(
				(response: any) => {
					board[response.recommendation as number] = currentPlayer;
					setBoard(board);
					setCurrentPlayer(PanelType.zero);
				}
			).catch(
				(error: Error) => {
					console.log("error in getting next move ", error.message);
				}
			)
		}
	});

	useEffect(() => {
		console.log("Init");
		gameInit(props.gameType, setCurrentPlayer, board, setmultiPlayer);
	}, []);

	function turnOver(row: number, column: number) {
		// check if this cell is empty
		if (board[getIndexValue(row, column)] !== PanelType.empty || gameStatus !== GameStatus.inProgress) {
			return;
		}
		board[getIndexValue(row, column)] = currentPlayer
		setBoard(board);

		if ( PanelType.cross === currentPlayer){
			setCurrentPlayer(PanelType.zero);
		} 
		else {
			setCurrentPlayer(PanelType.cross);
		}
	}

	// init board
	for (var i = 0; i < 9; i++) {
		if (board[i] === undefined ) {
			board[i] = PanelType.empty;
			setBoard(board);
		}
	}

	return (
		<div className="Game-Window">
			{(gameStatus === GameStatus.tie) &&
			 	<h3>
					<span>It's a tie!</span> 
				</h3>
			}
			{(gameStatus === GameStatus.crossWon) && 
				<h3>
					<span>You lost!</span> 
				</h3>
			}
			{(gameStatus === GameStatus.zeroWon) && 
				<h3>
					<span>You won!</span> 
				</h3>
			}
			{ (GameStatus.inProgress === gameStatus) &&
			<table id="gameWindow">
				{
					data.map((row, index) => (
					<tr className='Panel-row' key={row[0]}>
						{row.map(column => 
						<th className='Panel-column' key={column}> 
							<Panel 	
								row={index} 
								column={(column > 3) ? (column - index*3 -1): column - 1} 
								assignedType={PanelType.zero}
								turnOver={turnOver} 
								currentPlayer={currentPlayer}
								myType = { board[ getIndexValue(index, ((column > 3) ? (column - index*3 -1): column - 1) ) ]}
							/> 
						</th>
						)}
					</tr>
					))
				}
			</table>}
		</div>
	);
	}

export default GameWindow;