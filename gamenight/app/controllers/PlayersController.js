import { AppState } from "../AppState.js"
import { playerService } from "../services/PlayerService.js";

export class PlayersController {
    constructor() {
        console.log('👋Hello from PlayersController', AppState.players);
        this.drawPlayers();
    }

    //Calls to increase Player score and to redraw the players
    increasePlayerScore(playerId)
    {
        console.log('Score increased', playerId);
        playerService.increasePlayerScore(playerId);
        this.drawPlayers();
    }

    decreasePlayerScore(playerId)
    {
        console.log('Score decreased', playerId);
        playerService.decreasePlayerScore(playerId);
        this.drawPlayers();
    }

    addPlayer(event){
        //REVIEW event is depreciated without adding the params for it?
        event.preventDefault();

        // Access the form element
        const form = event.target;

        // Get the value of the input field with name="playerName"
        const playerName = form.playerName.value;
        console.log('controller new player', playerName);

        //Call and draw Players
        playerService.addPlayer(playerName);
        this.drawPlayers();
    }

    //draw out all of the players
    drawPlayers()
    {
        //Get the players from app state
        const players = AppState.players;

        //Set out the player's content with model
        let playerContent = '';
        players.forEach(player => playerContent += player.PlayerTemplateCard);
        
        //With the html list of players, put it in the row with player-list
        const playerListElement = document.getElementById('player-list');
        playerListElement.innerHTML = playerContent;
  }
}