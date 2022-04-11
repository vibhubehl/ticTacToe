import React from 'react';
import { Panel } from './Panel';

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
        <table>
        {
          data.map((row, index) => (
            <tr key={row[0]}>
              {row.map(cellId => 
                <th key={cellId}> cellId </th>
              )}
            </tr>
          ))
        }
        </table>
      </div>
    );
}

export default GameWindow;