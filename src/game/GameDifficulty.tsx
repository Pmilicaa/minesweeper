import { List, ListItem, ListItemText } from "@mui/material";
import { useAppDispatch } from "../common/hooks";
import { createGame } from "./gameSlice";
import { GameDifficultyType } from "./gameTypes";

export const GameDifficulty = ({
  setChosenDifficulty,
  aligment,
}: GameDifficultyType) => {
  const dispatch = useAppDispatch();
  const startGame = (difficulty: number) => {
    setChosenDifficulty(difficulty);
    dispatch(createGame(`new ${difficulty}`));
  };
  return (
    <List
      sx={{
        fontSize: "60px",
        display: aligment === "HORIZONTAL" ? "flex" : "block",
      }}
    >
      <ListItem button onClick={() => startGame(1)}>
        <ListItemText primary="Beginner" />
      </ListItem>
      <ListItem button onClick={() => startGame(2)}>
        <ListItemText primary="Intermediate" />
      </ListItem>
      <ListItem button onClick={() => startGame(3)}>
        <ListItemText primary="Hard" />
      </ListItem>
      <ListItem button onClick={() => startGame(4)}>
        <ListItemText primary="Expert" />
      </ListItem>
    </List>
  );
};
