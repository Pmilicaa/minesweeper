import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./common/hooks";
import { RootState } from "./common/store";
import Game from "./game/Game";
import { GameDifficulty } from "./game/GameDifficulty";
import { initialiazeGame } from "./game/gameSlice";

function App() {
  const [chosenDifficulty, setChosenDifficulty] = useState(1);
  const dispatch = useAppDispatch();
  const gameState = useAppSelector((state: RootState) => state.game);
  useEffect(() => {
    dispatch(initialiazeGame());
  }, []);

  return (
    <Box
      component="div"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 style={{ fontSize: "50px" }}>MINESWEEPER 💣</h1>
      {gameState.map.length > 0 ? (
        <Box component="div">
          <Box>
            <GameDifficulty
              setChosenDifficulty={setChosenDifficulty}
              aligment={"HORIZONTAL"}
            />
          </Box>
          <Game
            gameMap={gameState.map}
            message={gameState.message}
            difficulty={chosenDifficulty}
          />
        </Box>
      ) : (
        <>
          <Box textAlign="center">
            <h2>Choose game difficulty</h2>
          </Box>
          <Box sx={{ paddingTop: "60px" }}>
            <GameDifficulty
              setChosenDifficulty={setChosenDifficulty}
              aligment={"VERTICAL"}
            />
          </Box>
        </>
      )}
    </Box>
  );
}

export default App;
