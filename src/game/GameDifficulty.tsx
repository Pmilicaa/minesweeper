import { List, ListItem, ListItemText } from "@mui/material";
import { GameDifficultyType } from "./gameTypes";

const difficulties = [
  { type: "Beginner", level: 1 },
  { type: "Intermediate", level: 2 },
  { type: "Hard", level: 3 },
  { type: "Expert", level: 4 },
];
export const GameDifficulty = ({ aligment, startGame }: GameDifficultyType) => {
  const getDifficulties = difficulties.map((difficulty, index) => {
    return (
      <ListItem
        role="menuitem"
        button
        onClick={() => startGame(difficulty.level)}
        key={index}
      >
        <ListItemText primary={difficulty.type} />
      </ListItem>
    );
  });
  return (
    <List
      role="menu"
      sx={{
        fontSize: "60px",
        display: aligment === "HORIZONTAL" ? "flex" : "block",
      }}
      data-testid="game-difficulty-component"
    >
      {getDifficulties}
    </List>
  );
};
