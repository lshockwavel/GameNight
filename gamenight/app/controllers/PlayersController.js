import { AppState } from "../AppState.js"
import { playerService } from "../services/PlayerService.js";

export class PlayersController {
    constructor() {
        console.log('👋Hello from PlayersController', AppState.players);
        this.drawPlayers();
    }

    //Calls to increase Player score and to redraw the players
    increasePlayerScore(playerName)
    {
        console.log('Score increased', playerName);
        playerService.increasePlayerScore(playerName);
        this.drawPlayers();
    }

    decreasePlayerScore(playerName)
    {
        console.log('Score decreased', playerName);
        playerService.decreasePlayerScore(playerName);
        this.drawPlayers();
    }

    // PlayersController.js
    drawPlayers(){
    const players = AppState.players;
    let playerContent = '';
    players.forEach(player => playerContent += player.PlayerTemplateCard);
    const playerListElement = document.getElementById('player-list');
    playerListElement.innerHTML = playerContent;
  }
}