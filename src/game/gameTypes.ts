export interface GameState {
  map: string[];
  message: string;
}
export interface GameProps {
  gameMap: string[];
  difficulty: number;
}
export interface GameAction {
  type: string;
  payload: string;
}
