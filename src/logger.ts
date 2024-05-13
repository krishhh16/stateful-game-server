import { gameManager } from "./store";

const games = gameManager;
export function startLogger() {
    setInterval(() => {
        console.log(games.games);
    }, 4000)
}