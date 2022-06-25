const mongoose = require("mongoose");

export enum PanelType {
  empty = "-",
  zero = "O",  //player1
  cross = "X",  //player2
}

export type Player = {
    Type: PanelType,
    ID: Number
}
const PlayerObj : Player = {} as Player;

const GameSchema = new mongoose.Schema({
  // _id: {
  //   type: Number,
  //   unique: true,
  // },
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