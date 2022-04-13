import { Box } from "@mui/system";
import { useAppDispatch } from "../../common/hooks";
import { addFlag, removeFlag } from "../gameSlice";
import { useCellStyles } from "./cellStyles";
import { CellProps } from "./cellsTypes";

export const Cell = ({ x, y, onClick, isFlagged }: CellProps) => {
  const dispatch = useAppDispatch();

  const cellStyles = useCellStyles();
  const handleLeftAndRightClick = (e: Event) => {
    if (e.type === "click") {
      if (!isFlagged) {
        onClick(x, y);
      }
    } else if (e.type === "contextmenu") {
      e.preventDefault();
      if (isFlagged) {
        dispatch(removeFlag({ x: x, y: y }));
      } else {
        dispatch(addFlag({ x: x, y: y }));
      }
    }
  };

  return (
    <Box
      component="div"
      data-testid="cell-component"
      role="button"
      onClick={(e: any) => handleLeftAndRightClick(e)}
      onContextMenu={(e: any) => handleLeftAndRightClick(e)}
      className={cellStyles.cell}
    >
      {isFlagged && (
        <img
          style={{ width: "25px" }}
          src={`${process.env.REACT_APP_FILE_URL}flag.png`}
          alt="flag"
        />
      )}
    </Box>
  );
};