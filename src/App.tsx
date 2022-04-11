import React, { useEffect, useState } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./common/hooks";
import { RootState } from "./common/store";
import Game from "./game/Game";
import { createGame, initialiazeGame } from "./game/gameSlice";

function App() {
  const [chosenDifficulty, setChosenDifficulty] = useState(1);
  const dispatch = useAppDispatch();
  const gameState = useAppSelector((state: RootState) => state.game);

  useEffect(() => {
    dispatch(initialiazeGame());
  }, []);

  const startGame = (difficulty: number) => {
    dispatch(createGame(`new ${difficulty}`));
  };

  return (
    <div className="App">
      <button onClick={() => startGame(1)}>Beginner</button>
      <button onClick={() => startGame(2)}>Intermediate</button>
      <button onClick={() => startGame(3)}>Hard</button>
      <button onClick={() => startGame(4)}>Expert</button>
      <Game gameMap={gameState.map} difficulty={chosenDifficulty} />
    </div>
  );
}

export default App;
