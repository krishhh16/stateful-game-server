interface Game {
    id: string;
    whitePlayer: string;
    blackPlayer: string;
    moves: string[];
}

export class GameManager {
    games: Game[] = [];
    constructor() {
        this.games = [];
    }

    addMove(gameId: string, move: string){
        console.log(`Adding move ${move} to game ${gameId}`);
        const game = this.games.find(game => game.id === gameId)
        game?.moves.push(move)
    }
}


