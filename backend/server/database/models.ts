import mongoose from "mongoose";

export enum PanelType {
  empty = "-",
  zero = "O",  //player1
  cross = "X",  //player2
}

export type Player = {
    Type: PanelType,
    ID: Number
}

export type GameSessionType = {
  _id: mongoose.ObjectId,
  Player1?: Player,
  Player2?: Player
}
const PlayerObj : Player = {} as Player;

export const GameSchema = new mongoose.Schema({
  Player1: {
    type: PlayerObj,
    required: false,
  },
  Player2: {
    type: PlayerObj,
    required: false,
  },

});

export const Multiplayer = mongoose.model("Multiplayer", GameSchema);

//module.exports = Multiplayer;