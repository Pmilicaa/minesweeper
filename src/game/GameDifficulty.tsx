import { List, ListItem, ListItemText } from "@mui/material";
import { GameDifficultyType } from "./gameTypes";

export const GameDifficulty = ({ aligment, startGame }: GameDifficultyType) => {
  return (
    <List
      role="menu"
      sx={{
        fontSize: "60px",
        display: aligment === "HORIZONTAL" ? "flex" : "block",
      }}
      data-testid="game-difficulty-component"
    >
      <ListItem role="menuitem" button onClick={() => startGame(1)}>
        <ListItemText primary="Beginner" />
      </ListItem>
      <ListItem role="menuitem" button onClick={() => startGame(2)}>
        <ListItemText primary="Intermediate" />
      </ListItem>
      <ListItem role="menuitem" button onClick={() => startGame(3)}>
        <ListItemText primary="Hard" />
      </ListItem>
      <ListItem role="menuitem" button onClick={() => startGame(4)}>
        <ListItemText primary="Expert" />
      </ListItem>
    </List>
  );
};
