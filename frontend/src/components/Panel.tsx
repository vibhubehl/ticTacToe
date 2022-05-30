
   
import React, { useState } from 'react';
import { useStore } from 'react-redux';
import zero from "../assets/img/zero.png";
import cross from "../assets/img/cross2.png";
import '../assets/css/Panel.css';
import {PanelType} from "../DTO/boardType";

interface PanelProps{
  row: number;
  column: number;
  assignedType: PanelType;
  turnOver(row: number, column: number): void;
  currentPlayer: PanelType;
  myType: PanelType;
}

export function Panel (props: PanelProps) {

return (
	<div onClick={() => props.turnOver(props.row, props.column)} className="Panel-image">
		{ props.myType === PanelType.zero &&
		<img style={{display:"block"}} src={zero} alt="zero" onClick={ () => props.turnOver(props.row, props.column)}/>
		}
		{ props.myType === PanelType.cross &&
		<img style={{display:"block"}} src={cross} alt="zero" onClick={ () => props.turnOver(props.row, props.column)}/>
		}
	</div>
);
}

export default Panel;