import { GameManager } from "./store";
import { startLogger } from "./logger";

startLogger();
console.log('hello world')
setInterval(() => {
    GameManager.getInstance().addMove("12123", "")
}, 5000)
