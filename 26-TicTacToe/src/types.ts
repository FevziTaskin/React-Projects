export type Player = {
  id: number;
  name: string;
  iconClass: string;
  colorClass: string;
};

export type Move = {
  player: Player;
  squareId: number; // from 1-9, represents square on game board
};

export type GameStatus = {
  isComplete: boolean;
  winner: Player | null; // If null and game is complete, is a tie
};

export type Game = {
  moves: Move[];
  status: GameStatus;
};

export type GameState = {
  currentGameMoves: Move[];
  history: {
    currentRoundGames: Game[];
    allGames: Game[];
  };
};
