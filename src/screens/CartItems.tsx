import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import { RootState } from "../redux/Store";
import { connect } from "react-redux";
import { withStyles } from "@mui/styles";
import CartStyles from "./CartStyles";

import {
  clearCart,
  couponAppliedToggle,
  decrementQuanity,
  incrementItemQuantity,
  payCloseToggle,
  showToggling,
} from "../redux/productsSlice";
const GST_RATE = 0.18;
const CGST_RATE = 0.09;

interface Props {
  shopingCart: { shopingCart: {}[] };
  couponApplied: boolean;
  showToggling: () => void;
  couponAppliedToggle: () => void;
  classes: any;
  incrementItemQuantity: (arg: any) => void;
  decrementQuanity: (arg: any) => void;
  clearCart: () => void;
  payCloseToggle: () => void;
}

interface RazorpayResponse {
  razorpay_payment_id: string;
}

interface RazorpayOptions {
  key: string;
  key_secret: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  handler: (response: RazorpayResponse) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  notes: {
    address: string;
  };
  theme: {
    color: string;
  };
}

interface Razorpay {
  new (options: RazorpayOptions): {
    open(): void;
  };
}

class CartItems extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  calculateTotalPrice = () => {
    const { shopingCart, couponApplied } = this.props;
    console.log(couponApplied);
    const totalPrice = shopingCart.shopingCart.reduce(
      (total: any, item: any) => {
        return total + item.price * item.quantity;
      },
      0
    );
    const gstAmout = totalPrice * GST_RATE;
    const cgstAmount = totalPrice * CGST_RATE;
    let totalPriceWithTax = totalPrice + gstAmout + cgstAmount;
    if (couponApplied) {
      totalPriceWithTax *= 0.8;
    }

    return totalPriceWithTax.toFixed(2);
  };

  SucessANimation = {};

  calculateGSTAmount = () => {
    const { shopingCart } = this.props;

    const totalPriceBeforeTax = shopingCart.shopingCart.reduce(
      (total: any, item: any) => {
        return total + item.price * item.quantity;
      },
      0
    );

    const gstAmount = totalPriceBeforeTax * GST_RATE;

    return gstAmount.toFixed(2);
  };
  calculateCGSTAmount = () => {
    const { shopingCart } = this.props;
    const totalPriceBeforeTax = shopingCart.shopingCart.reduce(
      (total: any, item: any) => {
        return total + item.price * item.quantity;
      },
      0
    );
    const cgstAmount = totalPriceBeforeTax * CGST_RATE;
    return cgstAmount.toFixed(2);
  };

  paymentHandler = async () => {
    this.props.payCloseToggle();
    const { shopingCart } = this.props;

    const totalPriceBeforeTax = shopingCart.shopingCart.reduce(
      (total: any, item: any) => {
        return total + item.price * item.quantity;
      },
      0
    );

    const gstAmount = totalPriceBeforeTax * GST_RATE;
    const cgstAmount = totalPriceBeforeTax * CGST_RATE;

    let totalPriceWithTax = totalPriceBeforeTax + gstAmount + cgstAmount;
    if (this.props.couponApplied) {
      totalPriceWithTax *= 0.8;
    }

    const totalAmount = Math.round(totalPriceWithTax * 100);

    const options: RazorpayOptions = {
      key: "rzp_test_b37VQMgUpLQaJe",
      key_secret: "Txn4H6B61wUknfGqD4Ppw8gF",
      amount: totalAmount,
      currency: "INR",
      name: "Practice",
      description: "for testing",
      handler: () => {
        this.props.showToggling();
        // istanbul ignore next

        this.props.couponAppliedToggle();
        // istanbul ignore next

        this.props.clearCart();
      },
      prefill: {
        name: "chjayakrishna",
        email: "chjayakrishna443@gmail.com",
        contact: "9959809324",
      },
      notes: {
        address: "Razorpay Corporate office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razorpay = (window as any).Razorpay(options);
    razorpay.open();
  };

  applyCouponHandler = () => {
    const { shopingCart, couponAppliedToggle } = this.props;

    const totalPriceBeforeTax = shopingCart.shopingCart.reduce(
      (total: any, item: any) => {
        return total + item.price * item.quantity;
      },
      0
    );
    const gstAmout = totalPriceBeforeTax * GST_RATE;
    const cgstAmount = totalPriceBeforeTax * CGST_RATE;
    let totalPriceWithTax = totalPriceBeforeTax + gstAmout + cgstAmount;
    if (totalPriceWithTax >= 1000) {
      couponAppliedToggle();
    }
  };

  render() {
    const { classes } = this.props;
    let sum = 0;
    this.props.shopingCart.shopingCart.forEach((each: any) => {
      const value = each.quantity * each.price;
      sum = sum + value;
    });
    return (
      <>
        <Box className={classes.cartbgContainer}>
          {this.props.shopingCart.shopingCart.length === 0 ? (
            <Typography variant="h2" className={classes.noCarts}>
              No items in the cart
            </Typography>
          ) : (
            <>
              <Box className={classes.scrollBar}>
                {this.props.shopingCart.shopingCart.map(
                  (item: any, index: any) => (
                    <Box key={index} data-testid={`cartItems${index}`}>
                      <Card className={classes.boxBorder}>
                        <CardContent sx={{ alignItems: "center" }}>
                          <Box className={classes.cartNameFlex}>
                            <Box>
                              <Box
                                component="img"
                                src={item.image}
                                className={classes.cartImage}
                              />
                            </Box>
                            <Box>
                              <Typography
                                variant="subtitle1"
                                className={classes.title}
                              >
                                {item.title}
                              </Typography>

                              <Typography
                                data-testid="Total price:"
                                variant="body2"
                                sx={{ marginLeft: "50px", fontSize: "18px" }}
                              >
                                Price: ₹{item.price.toFixed(2)}
                              </Typography>

                              <ButtonGroup
                                variant="contained"
                                sx={{ marginLeft: "50px", marginTop: "6px" }}
                              >
                                <Button
                                  className={classes.cartItembuttons}
                                  data-testid={`increment${index}`}
                                  onClick={() =>
                                    this.props.incrementItemQuantity(item)
                                  }
                                >
                                  +
                                </Button>
                                <Button className={classes.cartItembuttons}>
                                  {item.quantity}
                                </Button>
                                <Button
                                  className={classes.cartItembuttons}
                                  data-testid={`decremnet${index}`}
                                  onClick={() =>
                                    this.props.decrementQuanity(item)
                                  }
                                >
                                  -
                                </Button>
                              </ButtonGroup>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </Box>
                  )
                )}
              </Box>
              <>
                <Box className={classes.payments}>
                  <Typography>
                    GST ({(GST_RATE * 100).toFixed(2)}%): ₹
                    {this.calculateGSTAmount()}
                  </Typography>
                  <Typography>
                    GST ({(CGST_RATE * 100).toFixed(2)}%): ₹
                    {this.calculateCGSTAmount()}
                  </Typography>
                  <Typography>
                    Total price: ₹{this.calculateTotalPrice()}
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={this.paymentHandler}
                    className={classes.cartItembuttons}
                    data-testid="Proced"
                  >
                    Proced to Checkout
                  </Button>
                </Box>
                {!this.props.couponApplied && (
                  <Button
                    variant="contained"
                    data-testid="apply20"

                    onClick={() => this.props.couponAppliedToggle()}
                    className={classes.cartItembuttons}
                  >
                    Apply Coupon (20% Off)
                  </Button>
                )}

                {!this.props.couponApplied && (
                  <Button
                    variant="contained"
                    data-testid="apply30"
                    onClick={this.applyCouponHandler}
                    className={classes.cartItembuttons}
                  >
                    Apply Coupon (30% Off for orders over 1000)
                  </Button>
                )}
              </>
            </>
          )}
        </Box>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    shopingCart: state.productsSlice,
    showSucess: state.productsSlice,
    couponApplied: state.productsSlice.couponApplied,
  };
};

const mapDispatchToProps = {
  incrementItemQuantity,
  decrementQuanity,
  clearCart,
  showToggling,
  couponAppliedToggle,
  payCloseToggle,
};
//@ts-ignore
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(CartStyles)(CartItems));
