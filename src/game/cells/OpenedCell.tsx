import { Box } from "@mui/system";
import { useCellStyles } from "./cellStyles";
import { OpenedCellValue } from "./cellsTypes";

const OpenedCell = ({ value }: OpenedCellValue) => {
  const cellStyles = useCellStyles();

  const getFontColor = (value: string) => {
    if (value === "1") {
      return "green";
    } else if (value === "2") {
      return "yellow";
    } else if (value === "3") {
      return "red";
    } else {
      return "brown";
    }
  };

  return (
    <Box
      component="div"
      onClick={() => getFontColor(value)}
      data-testid="opened-cell-component"
      sx={{
        color: getFontColor(value),
      }}
      className={cellStyles.openedCell}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {value}
      </Box>
    </Box>
  );
};

export default OpenedCell;
