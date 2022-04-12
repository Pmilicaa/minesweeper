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
type AligmentGameDifficulty = "VERTICAL" | "HORISONTAL";
export interface GameDifficultyType {
  setChosenDifficulty: Function;
  aligment: AligmentGameDifficulty;
}
