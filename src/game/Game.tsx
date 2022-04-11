import { useAppDispatch } from "../common/hooks";
import { createGame } from "./gameSlice";

const Game = ({ gameMap, difficulty }: any) => {
  const dispatch = useAppDispatch();

  const startNewGame = () => {
    dispatch(createGame(`new ${difficulty}`));
  };

  return <div></div>;
};

export default Game;
