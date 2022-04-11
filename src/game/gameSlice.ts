import { createSlice } from "@reduxjs/toolkit";
import { GameState } from "./gameTypes";

const initialState: GameState = {
  map: [],
  message: "",
};

const convertMap = (payload: any): string[] => {
  const rowList = payload.split("map:")[1].split("\n");
  return rowList.filter((item: string[]) => !!item.length);
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
