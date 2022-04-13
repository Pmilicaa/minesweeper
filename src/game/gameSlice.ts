import { createAction, createSlice } from "@reduxjs/toolkit";
import {
  CREATE_GAME_ACTION_TYPE,
  INITIALIAZE_GAME_ACTION_TYPE,
} from "../constants/actions";
import { GameState } from "./gameTypes";

const initialState: GameState = {
  map: [],
  message: "",
  difficulty: 1,
};

const convertMap = (payload: any): string[] => {
  return payload
    .split("map:")[1]
    .split("\n")
    .filter((row: String) => row !== "");
};
export const initialiazeGame = createAction(INITIALIAZE_GAME_ACTION_TYPE);
export const createGame = createAction<string>(CREATE_GAME_ACTION_TYPE);

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setMap(state, action) {
      state.map = convertMap(action.payload);
    },
    editMessage(state, action) {
      state.message = action.payload;
    },
    setDifficulty(state, action) {
      state.difficulty = action.payload;
    },
  },
});

export const { setMap, editMessage, setDifficulty } = gameSlice.actions;
