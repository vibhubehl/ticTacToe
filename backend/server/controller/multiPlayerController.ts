import axios from "axios";
import mongoose from "mongoose";
import { PanelType } from "../database/models";
import { Multiplayer } from "../database/models";


export default function getGameID(){
    const gameExists = findExistingGame();
    var game;
    if(gameExists !== ""){
        game = createNewGame();
    }
    else{
        // assign payer 2 an id and get game id for that game
    }
    return game;
}

// helper methods
export function findExistingGame(){
    const gameExists = Multiplayer.find({
        Player2: ""
    })
    return gameExists;
}

export function createNewGame(){
    const game = new Multiplayer({
        Player1:{
            Type: PanelType.zero,
            ID: 1
        },
        Player2: {}
    });
    game.save();
    return game;
}