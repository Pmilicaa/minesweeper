import { Box } from "@mui/system";
import { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./common/hooks";
import { RootState } from "./common/store";
import Game from "./game/Game";
import { GameDifficulty } from "./game/GameDifficulty";
import { createGame, initialiazeGame, setDifficulty } from "./game/gameSlice";

function App() {
  const dispatch = useAppDispatch();
  const gameState = useAppSelector((state: RootState) => state.game);
  const startGame = (difficulty: number) => {
    dispatch(setDifficulty(difficulty));
    dispatch(createGame(`new ${difficulty}`));
  };
  useEffect(() => {
    dispatch(initialiazeGame());
  }, []);

  return (
    <Box
      component="div"
      data-testid="app-component"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ fontSize: "40px" }} data-testid="heading-minesweeper">
        MINESWEEPER💣
      </h1>
      {gameState.difficulty > 0 ? (
        <Box component="div">
          <Box>
            <GameDifficulty aligment={"HORIZONTAL"} startGame={startGame} />
          </Box>
          <Game data-testid="game-component" message={gameState.message} />
        </Box>
      ) : (
        <>
          <Box textAlign="center">
            <h2>Choose game difficulty</h2>
          </Box>
          <Box sx={{ paddingTop: "60px" }}>
            <GameDifficulty aligment={"VERTICAL"} startGame={startGame} />
          </Box>
        </>
      )}
    </Box>
  );
}

export default App;
