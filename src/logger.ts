import { GameManager } from "./store";

export function startLogger() {
    setInterval(() => {
        console.log(GameManager.getInstance().games);
    }, 4000)
}