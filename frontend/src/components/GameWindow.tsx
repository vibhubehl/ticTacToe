import React, { useEffect, useState} from 'react';
import { PanelType, ROW_VALUE, data, boardType, GameStatus } from "../DTO/boardType";
import { convertBoardToString, getIndexValue, getGameStatus } from "../gameLogic/board";
import { Panel } from "./Panel";
import '../assets/css/Panel.css';

export function GameWindow () {
	// tracks who's turn it is X or 0
	const [currentPlayer, setCurrentPlayer] = useState(PanelType.zero);
	// tracks the board
	const [board, setBoard] = useState({});
	const [gameStatus, setGameStatus] = useState(GameStatus.inProgress);

	useEffect(() => {
		// setGameStatus(getGameStatus(board))

		console.log("useEffect is called " + getGameStatus(board));
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

		// cross/X is reseved for bot
		if(currentPlayer === PanelType.cross){
			console.log("Fetching next move from backend")
			fetch('http://localhost:3001/getNextMove/', options).
			then(function (response: any) {
				response.json().then( (res) => {
					console.log("response", board, convertBoardToString(board));
					board[res.recommendation as number] = currentPlayer
					setBoard(board);
					setCurrentPlayer(PanelType.zero);
				})
			}).catch(function (error: Error) {
				console.error("error" + error);
			});
		}

	});

	function turnOver(row: number, column: number) {
		console.log("turnover value is", row, column, getIndexValue(row, column))
		// check if this cell is empty
		if (board[getIndexValue(row, column)] !== PanelType.empty) {
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
		console.log("turnOVER", getIndexValue(row, column));
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
			</table>
		</div>
	);
	}

export default GameWindow;