import express, {Application, response} from "express";
import getNextMove from "./controller/singlePlayerController";
import {getGameID} from "./controller/multiPlayerController";
import { initialise } from "./database/db_config";

const cors = require('cors');
const bodyParser = require('body-parser');
const app:Application = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config();

app.use(bodyParser.json()); // <--- Here
app.use(cors({
  origin: "*"
}));


// Handle get/post requests
app.post("/getNextMove/singlePlayer",  (req, res) => {
  var response = getNextMove(req.body, res)
  // res.send(JSON.stringify(response))
});

app.get("/createMultiplayerID", async (request, response) => {
  console.log("got request!");
  var result = getGameID();
  result.then((res: any) => {
    response.send(res);
  } )
});

// start backend
app.listen(PORT, () => {
  console.log("here!!");
  initialise();
});