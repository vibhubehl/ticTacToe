import express, {Application} from "express";
import getNextMove from "./getNextMove";
var cors = require('cors');
const bodyParser = require('body-parser');
// create application/json parser
var jsonParser = bodyParser.json();

const app:Application = express();
const PORT = process.env.PORT || 3001;

// app.use(express.json());
app.use(bodyParser.json()); // <--- Here

app.use(cors({
  origin: "http://localhost:3000"
}));

app.post("/getNextMove/",  (req, res) => {
  console.log("request recieved");
  getNextMove(req.body, res)
  res.send("hello")
});

app.listen(PORT, () => {
  // app.use(express.json());
  console.log("here!!");

});