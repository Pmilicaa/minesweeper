import { makeStyles } from "@mui/styles";
export const useGameStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    border: "1px solid",
    borderColor: "white",
  },
  image: {
    width: "30px",
    background: "transparent",
  },
  cellRowContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
