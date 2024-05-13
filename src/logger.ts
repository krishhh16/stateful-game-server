import {games} from "./store.ts";

export function startLogger() {
  setInterval(() => {
    console.log(games);
  }, 5000) 
}
