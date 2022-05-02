import React from 'react';
import { Panel, PanelType } from "./Panel";
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
      // <div style={{display: "flex", flexDirection: "row", height:"100%", width:"100%"}}>
      <div className="Game-Window">
        <table id="gameWindow">
        {
          data.map((row, index) => (
            <tr className='Panel-row' key={row[0]}>
              {row.map(cellId => 
                <th className='Panel-column' key={cellId}> <Panel id={cellId} assignedType={PanelType.zero}/> </th>
              )}
            </tr>
          ))
        }
        </table>
      </div>
    );
}

export default GameWindow;