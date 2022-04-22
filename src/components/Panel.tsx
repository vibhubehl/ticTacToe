
   
import React, { useState } from 'react';
import { useStore } from 'react-redux';
import zero from "../assets/img/zero.png";
import cross from "../assets/img/cross2.png";
import '../assets/css/Panel.css';

enum PanelType {
  empty = "empty",
  zero = "zero",
  cross = "cross",
}

interface PanelProps{
  id: number
}

export function Panel (props: PanelProps) {
 
  const [type, setType] = useState(PanelType["empty"]);  

  return (
    <div>
        { type === PanelType["empty"] &&
          <img style={{display:"block"}} src={zero} alt="zero" className="Panel-image"/>
        }
    </div>
  );
}

export default Panel;