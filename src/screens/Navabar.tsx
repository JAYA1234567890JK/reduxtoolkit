import {
  AppBar,
  Badge,
  Box,
  Button,
  Divider,
  InputAdornment,
  OutlinedInput,
  Toolbar,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { withStyles } from "@mui/styles";

import MenuIcon from "@mui/icons-material/Menu";
import shopinBag from "../assets/shopingbag.png";
import Estyles from "./Estyles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { updatedQuery } from "../redux/productsSlice";
import Favarotes from "./Favarotes";
import Cartmenu from "./Cartmenu";

interface Props {
  classes: any;
  shopingCart?: any;
}

const Navabar: React.FC<Props> = ({ classes}) => {
  const dispatch = useDispatch();
  const { shopingCart, favarateToCartArr } = useSelector(
    (state: RootState) => state.productsSlice
  );

  return (
    <Box>
      <AppBar className={classes.appBarContainer}>
        <Toolbar>
          <Box className={classes.navContainer}>
            <Box className={classes.navItemsConatiner}>
              <Typography className={classes.itemNames}>
                Sellarcenter
              </Typography>
              <Typography className={classes.borderLine}>|</Typography>
              <Typography className={classes.itemNames}>Download</Typography>
              <Typography className={classes.borderLine}>|</Typography>
              <Typography className={classes.itemNames}>
                Fallow us on
              </Typography>
              <FacebookIcon className={classes.itemNames} />
              <InstagramIcon className={classes.itemNames} />
            </Box>
            <Box className={classes.navItems2Conatiner}>
              <ContactSupportIcon />
              <Typography className={classes.itemNames}>Suport</Typography>
              <Typography className={classes.borderLine}>|</Typography>

              <Button className={classes.itemButton}>Registar</Button>
              <Typography className={classes.borderLine}>|</Typography>

              <Button className={classes.itemButton}>Login</Button>
            </Box>
          </Box>
        </Toolbar>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Divider className={classes.borderBottomLine} />
        </Box>
        <Box className={classes.dashbord}>
          <Box className={classes.iconHeight}>
            <MenuIcon />
            <Box
              component="img"
              src={shopinBag}
              className={classes.shopingBag}
            />
            <Typography className={classes.itemNames}>SnapUp</Typography>
            <OutlinedInput
              placeholder="Search products"
              onChange={(e) => dispatch(updatedQuery(e.target.value))}
              endAdornment={
                <InputAdornment position="end" className={classes.searchIcon}>
                  <SearchRoundedIcon className={classes.searchBackgroundColr} />
                </InputAdornment>
              }
              className={classes.outlineInput}
              inputProps={{
                className: classes.inputProps,
              }}
            />
          </Box>

          <Box className={classes.cartIcon}>
            <Badge badgeContent={favarateToCartArr.length} color="error">
              <Favarotes />
            </Badge>
            <Badge badgeContent={shopingCart.length} color="error">
              <Cartmenu />
            </Badge>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
};

export default withStyles(Estyles)(Navabar);
