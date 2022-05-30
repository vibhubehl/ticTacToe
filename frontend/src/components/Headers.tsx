import React from 'react'
import '../assets/css/Main.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/img/ttt.png'
function Header() {
  const history = useNavigate();
  return (
    <div className="Header">
      <img src={logo} alt='logo' onClick={ ()=> history("/")}/>
      <h1>Tic Tac Toe</h1>
    </div>
  )
}

export default Header