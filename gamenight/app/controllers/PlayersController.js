import { AppState } from "../AppState.js"

export class PlayersController {
    constructor() {
        console.log('👋Hello from PlayersController', AppState.players);
        this.drawPlayers();
    }

    // PlayersController.js
    drawPlayers(){
    const players = /* players array from AppState */
    let playerContent = ''
    players.forEach(player, /* ... */)
    //... draw to page
  }
}