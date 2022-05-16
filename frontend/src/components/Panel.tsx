
   
import React, { useState } from 'react';
import { useStore } from 'react-redux';
import zero from "../assets/img/zero.png";
import cross from "../assets/img/cross2.png";
import '../assets/css/Panel.css';

export enum PanelType {
  empty = "empty",
  zero = "zero",
  cross = "cross",
}

interface PanelProps{
  id: number
  assignedType: PanelType;
  turnOver(): void;
  currentPlayer: PanelType;
}

export function Panel (props: PanelProps) {
 
  const [type, setType] = useState(PanelType.empty);  

  function toggleState (): void {
    if ( PanelType.empty === type && props.currentPlayer === props.assignedType){
      setType(props.assignedType);
      props.turnOver();
    } 
    // else {
    //   setType(PanelType.empty);
    // }
  }
  return (
    <div onClick={toggleState} className="Panel-image">
        { type === PanelType.zero &&
          <img style={{display:"block"}} src={zero} alt="zero" onClick={toggleState}/>
        }
    </div>
  );
}

export default Panel;