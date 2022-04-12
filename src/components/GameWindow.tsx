import React from 'react';
import { Panel } from "./Panel.tsx";

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
        <table id="gameWindow">
        {
          data.map((row, index) => (
            <tr key={row[0]}>
              {row.map(cellId => 
                <th key={cellId}> <Panel id={cellId}/> </th>
              )}
            </tr>
          ))
        }
        </table>
      </div>
    );
}

export default GameWindow;