import { makeStyles } from "@mui/styles";

export const useCellStyles = makeStyles({
  cell: {
    display: "inline-block",
    maxWidth: "25px",
    minHeight: "25px",
    minWidth: "25px",
    maxHeight: "25px",
    background: "#C0C0C0",
    border: "1px solid",
    borderColor: "white",
    textAlign: "center",
  },
  openedCell: {
    display: "inline-block",
    maxWidth: "25px",
    minHeight: "25px",
    minWidth: "25px",
    maxHeight: "25px",
    background: "#C0C0C0",
    border: "1px solid",
    borderColor: "#C0C0C0",
    textAlign: "center",
    verticalAlign: "middle",
  },
  bombCell: {
    display: "inline-block",
    maxWidth: "25px",
    minHeight: "25px",
    minWidth: "25px",
    maxHeight: "25px",
    background: "#C0C0C0",
    border: "1px solid",
    borderColor: "white",
    textAlign: "center",
  },
});
