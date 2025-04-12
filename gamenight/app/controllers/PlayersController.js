import { AppState } from "../AppState.js"

export class PlayersController {
    constructor() {
        console.log('👋Hello from PlayersController', AppState.players);
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