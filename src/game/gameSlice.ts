import { createSlice } from "@reduxjs/toolkit";
import { GameState } from "./gameTypes";

const initialState: GameState = {
  map: [],
  message: "",
};

const convertMap = (payload: any): string[] => {
  return payload
    .split("map:")[1]
    .split("\n")
    .filter((row: String) => row !== "");
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    initialiazeGame(state) {},
    createGame(state, action) {},
    getMap(state) {},
    setMap(state, action) {
      state.map = convertMap(action.payload);
    },
    editMessage(state, action) {
      state.message = action.payload;
    },
  },
});

export const { initialiazeGame, getMap, setMap, createGame, editMessage } =
  gameSlice.actions;
