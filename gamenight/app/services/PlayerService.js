import { AppState } from "../AppState.js";


class PlayerService {
    
    //Increase the player score by 1
    increasePlayerScore(playerName)
    {
        const player = AppState.players.find(player => player.name == playerName);
        player.score++;
    }

    //Decreases Player Score by 1
    decreasePlayerScore(playerName)
    {
        const player = AppState.players.find(player => player.name == playerName);
        player.score--;
    }


}

export const playerService = new PlayerService();