export interface GameState {
  map: string[];
  message: string;
}
export interface GameAction {
  type: string;
  payload: string;
}
