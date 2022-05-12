import axios from "axios";
import fetch from 'node-fetch';

export default function getNextMove(game: any, playerType: any){

  // const options = {
  //   method: "GET",
  //   url: `https://stujo-tic-tac-toe-stujo-v1.p.rapidapi.com/%7Bstate%7D/%7Bplayer%7D`,
  //   headers: {
  //     "X-RapidAPI-Host": "stujo-tic-tac-toe-stujo-v1.p.rapidapi.com",
  //     "X-RapidAPI-Key": "3685337b38msh74b50290264686dp19c54fjsnc3a8803befa1",
  //   },
  //   data: {
  //     state: game,
  //     player: playerType,
  //   }
  // };

  // const options = {
  //   method: 'GET',
  //   url: 'https://stujo-tic-tac-toe-stujo-v1.p.rapidapi.com/---------/O',
  //   headers: {
  //     'X-RapidAPI-Host': 'stujo-tic-tac-toe-stujo-v1.p.rapidapi.com',
  //     'X-RapidAPI-Key': '3685337b38msh74b50290264686dp19c54fjsnc3a8803befa1'
  //   }
  // };

//   axios.request(options).then(function (response: any) {
//       console.log(response.data);
//   }).catch(function (error: Error) {
//       console.error("error");
//   });
// }

const url = 'https://stujo-tic-tac-toe-stujo-v1.p.rapidapi.com/---------/O';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'stujo-tic-tac-toe-stujo-v1.p.rapidapi.com',
    'X-RapidAPI-Key': '3685337b38msh74b50290264686dp19c54fjsnc3a8803befa1'
  }
};

fetch(url, options)
	.then((res: any )=> res.json())
	.then((json: any )=> console.log(json))
	.catch((err: Error )=> console.error('error:' + err));
}