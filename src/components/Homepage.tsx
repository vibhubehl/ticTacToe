import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import history from './History.tsx';


function Homepage() {
    return (
        <div className="mode">
            <h2> Select a game mode to play!</h2>
            <div className='btn-mode'>
                <button className='btn btn-single' onClick={ ()=> history.push('/GameWindow')}>
                    Single Player <br></br> 
                    <FontAwesomeIcon icon={faUser}/>
                </button>
                <button className='btn btn-multiple'>
                    Multiple Player <br></br> 
                    <FontAwesomeIcon icon={faUserGroup}/>
                </button>
            </div>
        </div>
    )
    
}

export default Homepage;