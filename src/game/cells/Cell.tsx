import { Box } from "@mui/system";
import { useAppDispatch, useAppSelector } from "../../common/hooks";
import { RootState } from "../../common/store";
import { YOU_LOSE } from "../../constants/game";
import { addFlag, removeFlag } from "../gameSlice";
import { useCellStyles } from "./cellStyles";
import { CellProps } from "./cellsTypes";

export const Cell = ({ x, y, onClick, isFlagged }: CellProps) => {
  const dispatch = useAppDispatch();
  const gameMessage = useAppSelector((state: RootState) => state.game.message);

  const cellStyles = useCellStyles();
  const handleLeftAndRightClick = (e: MouseEvent): void => {
    if (e.type === "click") {
      if (!isFlagged) {
        onClick(x, y);
      }
    } else if (e.type === "contextmenu") {
      e.preventDefault();
      if (isFlagged) {
        dispatch(removeFlag({ x: x, y: y }));
      } else {
        if (gameMessage !== YOU_LOSE) {
          dispatch(addFlag({ x: x, y: y }));
        }
      }
    }
  };

  return (
    <Box
      component="div"
      data-testid="cell-component"
      role="button"
      onClick={(e: any) => handleLeftAndRightClick(e as MouseEvent)}
      onContextMenu={(e: any) => handleLeftAndRightClick(e as MouseEvent)}
      className={cellStyles.cell}
    >
      {isFlagged && (
        <img
          data-testid="flag-img"
          style={{ width: "25px" }}
          src={`${process.env.REACT_APP_FILE_URL}flag.png`}
          alt="flag"
        />
      )}
    </Box>
  );
};
