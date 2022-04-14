import { useAppDispatch, useAppSelector } from "../common/hooks";
import { clearAllFlags, createGame, editMessage } from "./gameSlice";
import { GameProps } from "./gameTypes";
import { Box } from "@mui/system";
import { Cell } from "./cells/Cell";
import { Container } from "@mui/material";
import OpenedCell from "./cells/OpenedCell";
import BombCell from "./cells/BombCell";
import {
  BOMB_CELL,
  EMPTY_CELL,
  YOU_CAN_DO_IT,
  YOU_LOSE,
} from "../constants/game";
import { WebSocketClient } from "../services/socket/WebSocketClient";
import { useGameStyles } from "./gameStyles";
import { RootState } from "../common/store";

const Game = ({ message }: GameProps) => {
  const dispatch = useAppDispatch();
  const gameStyles = useGameStyles();
  const gameState = useAppSelector((state: RootState) => state.game);
  const openCell = (x: number, y: number) => {
    WebSocketClient.getSocket().send(`open ${x} ${y}`);
  };

  const isFlagged = (x: number, y: number): boolean => {
    const found = gameState.flags.filter(
      (flag) => flag.x === x && flag.y === y
    );
    if (found.length === 1) {
      return true;
    } else {
      return false;
    }
  };

  const getCell = (cell: string, cellIndex: number, rowIndex: number) => {
    if (cell === EMPTY_CELL) {
      return (
        <Cell
          key={`${-cellIndex} - ${rowIndex}`}
          x={cellIndex}
          y={rowIndex}
          onClick={openCell}
          isFlagged={isFlagged(cellIndex, rowIndex)}
        />
      );
    } else if (cell === BOMB_CELL) {
      return <BombCell key={`${-cellIndex} - ${rowIndex}`} />;
    } else {
      return <OpenedCell key={`${-cellIndex} - ${rowIndex}`} value={cell} />;
    }
  };

  const getImgPath = (message: string) => {
    if (message.includes(YOU_LOSE)) {
      return `${process.env.REACT_APP_FILE_URL}sad-face.png`;
    } else {
      return `${process.env.REACT_APP_FILE_URL}smile.png`;
    }
  };

  const startNewGame = () => {
    dispatch(clearAllFlags());
    dispatch(editMessage(YOU_CAN_DO_IT));
    dispatch(createGame(`new ${gameState.difficulty}`));
  };

  return (
    <Container className={gameStyles.container}>
      {message === "" ? (
        <h2 style={{ color: "green" }}>🔥{(message = YOU_CAN_DO_IT)}🔥</h2>
      ) : message === YOU_LOSE ? (
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
        {gameState.map.map((row: String, rowIndex: number) => (
          <Box
            component="div"
            key={rowIndex}
            className={gameStyles.cellRowContainer}
          >
            {row
              .split("")
              .map((cell: string, cellIndex: number) =>
                getCell(cell, cellIndex, rowIndex)
              )}
          </Box>
        ))}
      </Box>
      <p style={{ color: "green" }}>
        start new game by clicking on smiley face
      </p>
    </Container>
  );
};

export default Game;
