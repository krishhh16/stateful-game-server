"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const logger_1 = require("./logger");
const games = store_1.gameManager;
(0, logger_1.startLogger)();
console.log('hello world');
setInterval(() => {
    games.addMove(Math.random().toString(), "");
}, 5000);
