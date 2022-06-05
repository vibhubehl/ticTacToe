import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { GameType } from "../DTO/gameType";
import GameWindow from './GameWindow';


function Homepage() {
    const [gameType, setGameType] = useState(GameType.notSelected);
    const navigate = useNavigate();

    function updateGameType(selectedGameType: GameType) {
        console.log(gameType)
        setGameType(selectedGameType);
    }

    return (
        <>  
            { (gameType !== GameType.notSelected) &&
                <GameWindow gameType={gameType} />
            }
            { (gameType === GameType.notSelected) &&
            <div className="mode">
                <h2> Select a game mode to play!</h2>
                <div className='btn-mode'>
                    <button className='btn btn-single' onClick={ ()=> updateGameType(GameType.singlePlayer)}>
                        Single Player <br></br> 
                        <FontAwesomeIcon icon={faUser}/>
                    </button>
                    <button className='btn btn-multiple' onClick={ ()=> updateGameType(GameType.multiPlayer)}>
                        Multiple Player <br></br> 
                        <FontAwesomeIcon icon={faUserGroup}/>
                    </button>
                </div>
            </div>}
        </>
    )
    
}

export default Homepage;