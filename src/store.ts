interface Game {
    id: string;
    whitePlayer: string;
    blackPlayer: string;
    moves: string[];
}

class GameManager {
    games: Game[] = [];
    private static instance: GameManager;
    private constructor() {
        this.games = [];
    }
    //Implementation of the singleton pattern
    static getInstance () {
        if (GameManager.instance){
            return GameManager.instance
        }
        GameManager.instance = new GameManager();
        return GameManager.instance
    }

    addMove(gameId: string, move: string){
        console.log(`Adding move ${move} to game ${gameId}`);
        const game = this.games.find(game => game.id === gameId)
        game?.moves.push(move)
    }
}

export const gameManager = GameManager.getInstance();
