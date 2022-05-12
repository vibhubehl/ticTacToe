"use strict";
const axios = require("axios");
function getNextMove(game, playerType) {
    const options = {
        method: 'GET',
        url: 'https://stujo-tic-tac-toe-stujo-v1.p.rapidapi.com/%7Bstate%7D/%7Bplayer%7D',
        headers: {
            'X-RapidAPI-Host': 'stujo-tic-tac-toe-stujo-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '3685337b38msh74b50290264686dp19c54fjsnc3a8803befa1'
        },
        body: {
            state: game,
            player: playerType,
        }
    };
    axios.request(options).then(function (response) {
        console.log(response.data);
        return response.data;
    }).catch(function (error) {
        console.error(error);
    });
    return null;
}
module.exports = getNextMove;
