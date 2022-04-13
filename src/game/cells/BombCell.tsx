import { Box } from "@mui/system";
import { useCellStyles } from "./cellStyles";

const BombCell = () => {
  const cellStyles = useCellStyles();
  return (
    <Box
      component="div"
      data-testid="bomb-cell-component"
      className={cellStyles.bombCell}
    >
      <img src={`${process.env.REACT_APP_FILE_URL}bomb.svg`} alt="bomb" />
    </Box>
  );
};

export default BombCell;
