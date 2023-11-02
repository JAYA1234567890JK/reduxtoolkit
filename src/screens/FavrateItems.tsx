import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import { withStyles } from "@mui/styles";
import CartStyles from "./CartStyles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { favarateToCart } from "../redux/productsSlice";
interface Props {
  classes: any;
}
const FavrateItems: React.FC<Props> = ({ classes }) => {
  const { favarateToCartArr } = useSelector(
    (state: RootState) => state.productsSlice
  );
  const dispatch = useDispatch();
  return (
    <Box  className = {classes.scrollBar}>
      <Box>
        {favarateToCartArr.length === 0 ? (
          <Typography className={classes.noCarts} data-testid = "no-items">No Favrates items</Typography>
        ) : (
          <>
            {favarateToCartArr.map((item: any, index: any) => {
              return (
                <Box key={index}>
                  <Card className={classes.boxBorder}>
                    <FavoriteIcon data-testid = "favar-icon"
                      onClick={() => dispatch(favarateToCart(item))}
                    />

                    <CardContent sx={{ alignItems: "center" }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <Box
                            component="img"
                            src={item.image}
                            sx={{ width: "80px" }}
                          />
                        </Box>
                        <Box>
                          <Typography
                            variant="subtitle1"
                            className={classes.title}
                            sx={{ marginLeft: "50px", fontSize: "18px" }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ marginLeft: "50px", fontSize: "18px" }}
                          >
                            Price: ₹{item.price}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              );
            })}
          </>
        )}
      </Box>
    </Box>
  );
};

export default withStyles(CartStyles)(FavrateItems);
