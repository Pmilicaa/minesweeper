import { Box } from "@mui/system";

const BombCell = () => {
  return (
    <Box
      component="div"
      sx={{
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
    >
      <img src="bomb.svg" alt="bomb" />
    </Box>
  );
};

export default BombCell;
