import { Box, IconButton, Typography } from "@mui/material";
import Estyles from "./Estyles";
import { withStyles } from "@mui/styles";
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
interface Props {
  classes: any;
}
const SuccessPopup: React.FC<Props> = ({ classes }) => {
  return (
    <Box className={classes.sucessContainer}>
      <Box>
      <IconButton data-testid = "icon">
        <DoneOutlineRoundedIcon/>
      </IconButton>
      </Box>
    </Box>
  );
};

export default withStyles(Estyles)(SuccessPopup);
