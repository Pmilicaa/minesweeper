import { createAction, createSlice } from "@reduxjs/toolkit";
import {
  CREATE_GAME_ACTION_TYPE,
  INITIALIAZE_GAME_ACTION_TYPE,
} from "../constants/actions";
import { Flag, GameState } from "./gameTypes";

const initialState: GameState = {
  map: [],
  message: "",
  difficulty: 0,
  flags: [],
};

const removeFlagFromState = (flags: Flag[], payload: Flag) => {
  for (let index = 0; index < flags.length; index++) {
    const flag = flags[index];
    if (flag.x === payload.x && flag.y === payload.y) {
      flags.splice(index, 1);
    }
  }
};

const convertMap = (payload: string): string[] => {
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
    addFlag(state, action) {
      state.flags.push(action.payload);
    },
    removeFlag(state, action) {
      removeFlagFromState(state.flags, action.payload);
    },
    clearAllFlags(state) {
      state.flags = [];
    },
    setDifficulty(state, action) {
      state.difficulty = action.payload;
    },
  },
});

export const {
  setMap,
  editMessage,
  addFlag,
  removeFlag,
  clearAllFlags,
  setDifficulty,
} = gameSlice.actions;
