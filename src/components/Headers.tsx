import React from 'react'
import '../assets/css/Main.css';
import history from './History.tsx'
import logo from '../assets/img/ttt.png';

function Header() {
  return (
    <div className="Header">
      <img src={logo} alt='logo' onClick={ ()=> history.push('/')}/>
      <h1>Tic Tac Toe</h1>
    </div>
  )
}

export default Header