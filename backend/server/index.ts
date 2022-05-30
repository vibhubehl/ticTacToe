import express, {Application, response} from "express";
import getNextMove from "./controller/nextMoveController";
var cors = require('cors');
const bodyParser = require('body-parser');
const app:Application = express();
const PORT = process.env.PORT || 3001;

// app.use(express.json());
app.use(bodyParser.json()); // <--- Here

app.use(cors({
  origin: "http://localhost:3000"
}));

app.post("/getNextMove/",  (req, res) => {
  console.log("request recieved");
  var response = getNextMove(req.body, res)
  console.log(response)
  // res.send(JSON.stringify(response))
});

app.listen(PORT, () => {
  // app.use(express.json());
  console.log("here!!");

});