import { Box } from "@mui/system";
import { useCellStyles } from "./cellStyles";
import { CellProps } from "./cellsTypes";

export const Cell = ({ x, y, onClick }: CellProps) => {
  const cellStyles = useCellStyles();

  return (
    <Box
      component="div"
      data-testid="cell-component"
      role="button"
      onClick={() => onClick(x, y)}
      className={cellStyles.cell}
    />
  );
};
