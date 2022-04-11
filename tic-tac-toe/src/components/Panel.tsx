
   
import React, { useState } from 'react';
import { useStore } from 'react-redux';

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
    <div style={{height: 40, width: 40 }}>
        { type === PanelType["empty"] &&
          <img src="../../../assets/Panel/zero.png"/>
        }
    </div>
  );
}

export default Panel;