import { useAppDispatch } from "../common/hooks";
import { createGame } from "./gameSlice";
import { GameProps } from "./gameTypes";
import { Box } from "@mui/system";
import { Cell } from "./cells/Cell";
import { Container } from "@mui/material";
import OpenedCell from "./cells/OpenedCell";
import BombCell from "./cells/BombCell";
import { BOMB_CELL, EMPTY_CELL } from "../constants/game";
import { WebSocketClient } from "../services/socket/WebSocketClient";
import { useGameStyles } from "./gameStyles";

const Game = ({ gameMap, difficulty, message }: GameProps) => {
  const dispatch = useAppDispatch();
  const gameStyles = useGameStyles();

  const openCell = (x: number, y: number) => {
    WebSocketClient.getSocket().send(`open ${x} ${y}`);
  };

  const getCell = (cell: string, cellIndex: number, rowIndex: number) => {
    if (cell === EMPTY_CELL) {
      return <Cell x={cellIndex} y={rowIndex} onClick={openCell} />;
    } else if (cell === BOMB_CELL) {
      return <BombCell />;
    } else {
      return <OpenedCell value={cell} />;
    }
  };

  const getImgPath = (message: string) => {
    if (message.includes("You lose")) {
      return `${process.env.REACT_APP_FILE_URL}sad-face.png`;
    } else {
      return `${process.env.REACT_APP_FILE_URL}smile.png`;
    }
  };

  const startNewGame = () => {
    dispatch(createGame(`new ${difficulty}`));
  };
  return (
    <Container className={gameStyles.container}>
      {message !== "" && message === "You lose" ? (
        <h2 style={{ color: "red" }}> 💣{message} 💣</h2>
      ) : (
        <h2 style={{ color: "green" }}>🔥{message}🔥</h2>
      )}
      <Box component="div" sx={{ backgroundColor: "#C0C0C0" }}>
        <Box component="div" className={gameStyles.imageContainer}>
          <img
            onClick={() => startNewGame()}
            src={getImgPath(message)}
            className={gameStyles.image}
            alt="smiley"
          />
        </Box>
        {gameMap.map((row: String, rowIndex: number) => (
          <Box component="div" className={gameStyles.cellRowContainer}>
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
