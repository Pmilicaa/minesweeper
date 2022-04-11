export interface GameState {
  map: string[];
  message: string;
}
export interface GameProps {
  gameMap: string[];
  difficulty: number;
  message: string;
}
export interface GameAction {
  type: string;
  payload: string;
}
export interface GameDifficultyType {
  setChosenDifficulty: Function;
  flex: boolean;
}
