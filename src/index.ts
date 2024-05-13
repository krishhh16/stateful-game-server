import {games} from "./store.ts";
import {startLogger} from "./logger.ts";

startLogger(); 
setInterval(() => {
  games.push({
    id: Math.random().toString(),
    whitePlayerName: "Alice",
    blackPlayerName: "Denzel",
    moves: []
  })
})
