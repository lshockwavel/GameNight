import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";


class PlayerService {
    
    //Increase the player score by 1
    increasePlayerScore(playerName)
    {
        const player = AppState.players.find(player => player.name == playerName);
        player.score++;

        console.log("service score", player.score, playerName);
    }

    //Decreases Player Score by 1
    decreasePlayerScore(playerName)
    {
        const player = AppState.players.find(player => player.name == playerName);
        player.score--;

        console.log("service score", player.score, playerName);
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