import { AppState } from "../AppState.js"

export class PlayersController {
    constructor() {
        console.log('👋Hello from PlayersController', AppState.players);
        this.drawPlayers();
    }
}