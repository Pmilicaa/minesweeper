import { createSlice } from "@reduxjs/toolkit";
import { GameState } from "./gameTypes";

const initialState: GameState = {
  map: [],
  message: "",
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    initialiazeGame(state) {},
    createGame(state, action) {},
  },
});

export const { initialiazeGame, createGame } = gameSlice.actions;
