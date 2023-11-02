import { Box, Button, Card, Grid, IconButton, Typography } from "@mui/material";
import { Component } from "react";
import { withStyles } from "@mui/styles";
import AppbarStyles from "./AppbarStyles";
import CircularProgress from "@mui/material/CircularProgress";
import { connect } from "react-redux";
import {
  getProducts,
  addToCart,
  favarateToCart,
  CartTypes,
  popup,
} from "../redux/productsSlice";
import { RootState } from "../redux/Store";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SuccessPopup from "./SuccessPopup";

interface favItemsTypes {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface Props {
  classes: any;
  showSucess: boolean;
  navigation: (arg: string) => void;

  getProducts: () => void;
  products: {
    products: {}[];
  };
  filterData: {
    filterData: {
      id: number;
      title: string;
      description: string;
      price: number;
      image: string;
    }[];
  };
  loading: boolean;
  addToCart: (id: number) => void;
  favarateToCart: (favItem: favItemsTypes) => void;
  popup: () => void;
  favatateToCartArr: any;
  shopingCart: CartTypes[];
}

interface State {}

class Appbar extends Component<Props, State> {
  state: State = {
    shopingCart: [],
  };

  componentDidMount(): void {
    this.props.getProducts();
  }
  componentDidUpdate(): void {
    setTimeout(() => {
      this.props.popup();
    }, 2000);
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        {this.props.loading ? (
          <Box
            className={classes.circularContainer}
            data-testid="loading-spinner"
          >
            <CircularProgress value={75} />
          </Box>
        ) : (
          <>
            {this.props.showSucess && (
              <Box>
                <SuccessPopup
                />
              </Box>
            )}

            <Box className={classes.boxGridContainer}>
              <Grid container spacing={4} className={classes.gridContainer}>
                {this.props.filterData.filterData.map((items, index) => {
                  const favrate = this.props.favatateToCartArr.find(
                    (each: { id: number }) => each.id === items.id
                  );
                  console.log(favrate,"jjjjjjj")
                  return (
                    <Grid item key={index} xl={2} lg={3} sm={4} xs={12}>
                      <Card className={classes.cardContainer}>
                        {favrate ? (
                          <IconButton>
                          <FavoriteIcon data-testid = "FavoriteIcon"
                            onClick={() => this.props.favarateToCart(items)}
                          />
                          </IconButton>
                        ) : (
                          <IconButton>
                          <FavoriteBorderIcon data-testid = "FavoriteIcon1"
                            onClick={() => this.props.favarateToCart(items)}
                          />
                          </IconButton>
                        )}
                        <Box className={classes.boxContainer}>
                          <Typography className={classes.title}>
                            {items.title}
                          </Typography>
                          <Typography className={classes.price}>
                            ₹{items.price}
                          </Typography>
                        </Box>
                        <Box className={classes.productsConatiner}>
                          <Box
                            component="img"
                            src={items.image}
                            className={classes.productImage}
                          />
                        </Box>
                        <Typography className={classes.description}>
                          {items.description}
                        </Typography>
                        <Box
                          sx={{
                            marginTop: ".5rem",
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                          }}
                        >
                          <Button
                            fullWidth
                            data-testid = {`AddtoCart${index}`}
                            onClick={() => this.props.addToCart(items.id)}
                            className={classes.cartButtons}
                          >
                            Addtocart
                          </Button>
                        </Box>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    products: state.productsSlice,
    filterData: state.productsSlice,
    loading: state.productsSlice.loading,
    shopingCart: state.productsSlice.shopingCart,
    favatateToCartArr: state.productsSlice.favarateToCartArr,
    showSucess: state.productsSlice.showSucess,
  };
};

const mapDispatchToProps = {
  getProducts,
  addToCart,
  favarateToCart,
  popup
};
//@ts-ignore

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(AppbarStyles)(Appbar));
