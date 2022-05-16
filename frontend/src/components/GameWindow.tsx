import React, { useEffect, useState } from 'react';
import { Panel, PanelType } from "./Panel";
import '../assets/css/Panel.css';
import axios from "axios";

const data: number[][] = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
];

interface GameWindowProps{

}

export function GameWindow (props: GameWindowProps) {
  const [currentPlayer, setCurrentPlayer] = useState(PanelType.zero);

  useEffect(() => {
    console.log("useEffect is called " + currentPlayer);
    const options = {
      method: 'Post',
      url: 'http://localhost:3001/getNextMove/',
      body: JSON.stringify({
        "playerType": "currentPlayer",
        "game": "---------",
      }),
    };
    
    // axios.post("http://localhost:3001/getNextMove/", {
    //   "playerType": currentPlayer,
    //   "game": "---------",
    // }).then(function (response: any) {
    //         console.log(response);
    //     }).catch(function (error: Error) {
    //         console.error("error" + error);
    //     });

    // cross/X is reseved for bot
    if(currentPlayer === PanelType.cross){
		console.log(options)
		axios.request(options).then(function (response: any) {
			console.log(response);
		}).catch(function (error: Error) {
			console.error("error" + error);
		});
    }

  });

  function turnOver() {
    console.log("turnOVER");
    if ( PanelType.cross === currentPlayer){
      setCurrentPlayer(PanelType.zero);
    } 
    else {
      setCurrentPlayer(PanelType.cross);
    }
  }

  return (
    <div className="Game-Window">
      <table id="gameWindow">
      {
        data.map((row, index) => (
          <tr className='Panel-row' key={row[0]}>
            {row.map(cellId => 
              <th className='Panel-column' key={cellId}> <Panel id={cellId} assignedType={PanelType.zero} turnOver={turnOver} currentPlayer={currentPlayer}/> </th>
            )}
          </tr>
        ))
      }
      </table>
    </div>
  );
}

export default GameWindow;