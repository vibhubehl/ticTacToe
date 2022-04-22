import React from 'react'
import '../assets/css/Main.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const history = useNavigate();
  return (
    <div className="Header">
      <img src={'../assets/img/ttt.png'} alt='logo' onClick={ ()=> history("/")}/>
      <h1>Tic Tac Toe</h1>
    </div>
  )
}

export default Header