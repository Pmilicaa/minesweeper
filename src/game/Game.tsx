import { useAppDispatch } from "../common/hooks";
import { createGame } from "./gameSlice";
import { GameProps } from "./gameTypes";
import { Box } from "@mui/system";
import Cell from "./cells/Cell";
import { Container } from "@mui/material";
import OpenedCell from "./cells/OpenedCell";
import BombCell from "./cells/BombCell";
import { BOMB_CELL, EMPTY_CELL } from "../constants/game";

const Game = ({ gameMap, difficulty, message }: GameProps) => {
  const dispatch = useAppDispatch();

  const getCell = (cell: string, cellIndex: number, rowIndex: number) => {
    if (cell === EMPTY_CELL) {
      return <Cell x={cellIndex} y={rowIndex} />;
    } else if (cell === BOMB_CELL) {
      return <BombCell />;
    } else {
      return <OpenedCell value={cell} />;
    }
  };

  const getImgPath = (message: string) => {
    if (message.includes("You lose")) {
      return "sad-face.png";
    } else {
      return "smile.png";
    }
  };

  const startNewGame = () => {
    dispatch(createGame(`new ${difficulty}`));
  };
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {message !== "" && message === "You lose" ? (
        <h2 style={{ color: "red" }}> 💣{message} 💣</h2>
      ) : (
        <h2 style={{ color: "green" }}>🔥{message}🔥</h2>
      )}
      <Box component="div" sx={{ backgroundColor: "#C0C0C0" }}>
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            border: 1,
            borderColor: "white",
          }}
        >
          <img
            onClick={() => startNewGame()}
            src={getImgPath(message)}
            style={{
              width: "30px",
              background: "transparent",
            }}
            alt="smiley"
          />
        </Box>
        {gameMap.map((row: String, rowIndex: number) => (
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {row
              .split("")
              .map((cell: string, cellIndex: number) =>
                getCell(cell, cellIndex, rowIndex)
              )}
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Game;
