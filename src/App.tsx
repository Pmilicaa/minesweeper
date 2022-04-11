import React, { useEffect } from "react";
import "./App.css";
import { useAppDispatch } from "./common/hooks";
import { createGame, initialiazeGame } from "./game/gameSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initialiazeGame());
  }, []);

  const startGame = (difficulty: number) => {
    dispatch(createGame(`new ${difficulty}`));
  };

  return (
    <div className="App">
      <button onClick={() => startGame(1)}>Beginner</button>
      <button onClick={() => startGame(1)}>Intermediate</button>
      <button onClick={() => startGame(1)}>Hard</button>
      <button onClick={() => startGame(1)}>Expert</button>
    </div>
  );
}

export default App;
