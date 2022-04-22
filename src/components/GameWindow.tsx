import React from 'react';
import { Panel } from "./Panel";
import '../assets/css/Panel.css';

const data: number[][] = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
];

interface GameWindowProps{

}

export function GameWindow (props: GameWindowProps) {
 
    return (
      <div className="home-page-wrapper page1">
      {/* <div className="Game-Window"> */}
        <table id="gameWindow" className='Game-Window'>
        {
          data.map((row, index) => (
            <tr className='Panel-row' key={row[0]}>
              {row.map(cellId => 
                <th className='.Panel-column' key={cellId}> <Panel id={cellId}/> </th>
              )}
            </tr>
          ))
        }
        </table>
      </div>
    );
}

export default GameWindow;