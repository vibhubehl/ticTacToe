import React from 'react'
import '../assets/css/Header.css';
import logo from '../assets/img/ttt.png';

function Header() {
  return (
    <div className="Header">
        <img src={logo}/>
      <h1>Tic Tac Toe</h1>
    </div>
  )
}

export default Header