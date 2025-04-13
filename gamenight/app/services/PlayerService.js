import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";


class PlayerService {
    
    //Increase the player score by 1
    increasePlayerScore(playerId)
    {
        const player = AppState.players.find(player => player.id == playerId);
        player.score++;

        console.log("service score", player.score, playerId);
    }

    //Decreases Player Score by 1
    decreasePlayerScore(playerId)
    {
        // const player = AppState.players.find(player => player.name == playerName);
        const player = AppState.players.find(player => player.id == playerId);

        if(player.score > 0)
        {
            player.score--;
        }
        
        console.log("service score", player.score, playerId);
    }

    //NOTE WIP re-arranging players
    sortPlayersByHighScore()
    {
        // Sort the players array in descending order of score
        AppState.players.sort((a, b) => b.score - a.score);

        console.log("Players sorted by high score:", AppState.players);
    }

    // Adding new player to the players list via push
    addPlayer(playerName) {
        debugger;
        try {
            const newPlayer = new Player(playerName); // Potential error here
            AppState.players.push(newPlayer); // Potential error here
            console.log(`Service Player ${playerName} added successfully.`);
        } catch (error) {
            console.error("Failed to add player:", error.message);
        }
    }

}

export const playerService = new PlayerService();