import { GameManager } from "./store";

const games = new GameManager()
export function startLogger() {
    setInterval(() => {
        console.log(games.games);
    }, 4000)
}