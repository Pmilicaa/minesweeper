export interface GameState {
  map: string[];
  message: string;
  difficulty: number;
}
export interface GameProps {
  gameMap: string[];
  message: string;
}
export interface GameAction {
  type: string;
  payload: string;
}
type AligmentGameDifficulty = "VERTICAL" | "HORIZONTAL";
export interface GameDifficultyType {
  aligment: AligmentGameDifficulty;
}
