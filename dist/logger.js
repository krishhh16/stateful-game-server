"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = void 0;
const store_1 = require("./store");
const games = store_1.gameManager;
function startLogger() {
    setInterval(() => {
        console.log(games.games);
    }, 4000);
}
exports.startLogger = startLogger;
