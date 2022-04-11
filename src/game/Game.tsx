import { useAppDispatch } from "../common/hooks";
import { createGame } from "./gameSlice";
import { GameProps } from "./gameTypes";

const Game = ({ gameMap, difficulty }: GameProps) => {
  const dispatch = useAppDispatch();
  const getCell = (cell: string, cellIndex: number, rowIndex: number) => {
    if (cell === "□") {
      return "□";
    } else if (cell === "*") {
      return "*";
    } else {
      return cell;
    }
  };

  const startNewGame = () => {
    dispatch(createGame(`new ${difficulty}`));
  };

  return (
    <div>
      {gameMap.map((row: String, rowIndex: number) => (
        <div>
          {row
            .split("")
            .map((cell: string, cellIndex: number) =>
              getCell(cell, cellIndex, rowIndex)
            )}
        </div>
      ))}
      <button onClick={() => startNewGame()}> start new game</button>
    </div>
  );
};

export default Game;
