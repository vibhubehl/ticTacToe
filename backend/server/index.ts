import express, {Application} from "express";
import getNextMove from "./getNextMove";

const PORT = process.env.PORT || 3001;

const app:Application = express();

app.listen(PORT, () => {
  console.log("here!!");
  getNextMove("----------", "X");
  // console.log(`Server listening on ${PORT}`, getNextMove("----------", "O"));
});