import { Box } from "@mui/system";
import { CellProps } from "./cellsTypes";

export const Cell = ({ x, y, onClick }: CellProps) => {
  return (
    <Box
      component="div"
      onClick={() => onClick(x, y)}
      sx={{
        boxShadow: 3,
        display: "inline-block",
        maxWidth: "25px",
        minHeight: "25px",
        minWidth: "25px",
        maxHeight: "25px",
        background: "#C0C0C0",
        border: 1,
        borderColor: "white",
        textAlign: "center",
      }}
    />
  );
};
