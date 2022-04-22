
   
import React, { useState } from 'react';
import { useStore } from 'react-redux';
import circle from "../assets/img/circle.png";
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
          <img src={circle} alt="circle" className="Panel-image"/>
        }
    </div>
  );
}

export default Panel;