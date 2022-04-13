import { Box } from "@mui/system";
import { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./common/hooks";
import { RootState } from "./common/store";
import Game from "./game/Game";
import { GameDifficulty } from "./game/GameDifficulty";
import { initialiazeGame } from "./game/gameSlice";

function App() {
  const dispatch = useAppDispatch();
  const gameState = useAppSelector((state: RootState) => state.game);

  useEffect(() => {
    dispatch(initialiazeGame());
  }, []);

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ fontSize: "40px" }}>MINESWEEPER💣</h1>
      {gameState.map.length > 0 ? (
        <Box component="div">
          <Box>
            <GameDifficulty aligment={"HORIZONTAL"} />
          </Box>
          <Game gameMap={gameState.map} message={gameState.message} />
        </Box>
      ) : (
        <>
          <Box textAlign="center">
            <h2>Choose game difficulty</h2>
          </Box>
          <Box sx={{ paddingTop: "60px" }}>
            <GameDifficulty aligment={"VERTICAL"} />
          </Box>
        </>
      )}
    </Box>
  );
}

export default App;
