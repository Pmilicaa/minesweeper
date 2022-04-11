import { Box } from "@mui/system";
import { OpenedCellValue } from "./cellsTypes";

const OpenedCell = ({ value }: OpenedCellValue) => {
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
      sx={{
        color: getFontColor(value),
        display: "inline-block",
        maxWidth: "25px",
        minHeight: "25px",
        minWidth: "25px",
        maxHeight: "25px",
        background: "#C0C0C0",
        border: 1,
        borderColor: "#C0C0C0",
        textAlign: "center",
        verticalAlign: "middle",
      }}
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
