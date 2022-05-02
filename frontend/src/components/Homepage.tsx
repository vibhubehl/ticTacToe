import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


function Homepage() {
    const navigate = useNavigate();
    return (
        <div className="mode">
            <h2> Select a game mode to play!</h2>
            <div className='btn-mode'>
                <button className='btn btn-single' onClick={ ()=> navigate('/GameWindow')}>
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