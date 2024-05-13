import { gameManager } from "./store";
import { startLogger } from "./logger";


const games = gameManager;
startLogger();
console.log('hello world')
setInterval(() => {
    games.addMove(Math.random().toString(), "")
}, 5000)
