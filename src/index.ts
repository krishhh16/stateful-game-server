import { GameManager } from "./store";
import { startLogger } from "./logger";


const games = new GameManager();
startLogger();
console.log('hello world')
setInterval(() => {
    games.addMove(Math.random().toString(), "")
}, 5000)
