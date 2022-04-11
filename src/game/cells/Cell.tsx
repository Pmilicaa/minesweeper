import { Box } from "@mui/system";
import { WebSocketClient } from "../../services/socket/WebSocketClient";
import { Coordinates } from "./cellsTypes";

const Cell = ({ x, y }: Coordinates) => {
  const openCell = () => {
    WebSocketClient.getSocket().send(`open ${x} ${y}`);
  };

  return (
    <Box
      component="div"
      onClick={() => openCell()}
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
    ></Box>
  );
};

export default Cell;
