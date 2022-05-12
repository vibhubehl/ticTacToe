import axios from "axios";
import fetch from 'node-fetch';

export default function getNextMove(game: string, playerType: string){

  const options = {
    method: 'GET',
    url: 'https://stujo-tic-tac-toe-stujo-v1.p.rapidapi.com/' + game + '/' + playerType,
    headers: {
      'X-RapidAPI-Host': 'stujo-tic-tac-toe-stujo-v1.p.rapidapi.com',
      'X-RapidAPI-Key': '3685337b38msh74b50290264686dp19c54fjsnc3a8803befa1'
    }
  };

  axios.request(options).then(function (response: any) {
      console.log(response);
  }).catch(function (error: Error) {
      console.error("error" + error);
  });
}
