import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material";
import CartItems from "../screens/CartItems";
import { Store, AnyAction } from "@reduxjs/toolkit";
import {
  clearCart,
  couponAppliedToggle,
  showToggling,
} from "../redux/productsSlice";

const mockStore = configureStore([]);
const theme = createTheme();

describe("CartItems Component", () => {
  let store: Store<unknown, AnyAction>;
  beforeEach(() => {
    store = mockStore({
      productsSlice: {
        shopingCart: [
          {
            title: "Item 1",
            price: 10,
            quantity: 2,
          },
          {
            title: "Item 2",
            price: 10000,
            quantity: 2,
          },
        ],
        couponApplied: false,
      },
    });
  });

  it("renders cart items when there are items in the cart", () => {
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CartItems/>
        </Provider>
      </ThemeProvider>
    );

    const cartItemElements = screen.getByTestId("cartItems0");
    console.log(cartItemElements);
    expect(cartItemElements).toBeDefined();
  });

  it("renders 'No items in the cart' when the cart is empty", () => {
    store = mockStore({
      productsSlice: {
        shopingCart: [],
        couponApplied: false,
      },
    });

    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CartItems />
        </Provider>
      </ThemeProvider>
    );
  });

  it("applies coupon on button click and calculates the discount", () => {
    store = mockStore({
      productsSlice: {
        shopingCart: [
          {
            title: "Item 1",
            price: 100,
            quantity: 1,
          },
        ],
        couponApplied: true,
      },
    });

    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CartItems />
        </Provider>
      </ThemeProvider>
    );
    //@ts-ignore
    window.Razorpay = () => ({ open: jest.fn(), handler: jest.fn() });

    const proceedToCheckoutButton = screen.getByTestId("Proced");

    const totalPrice = screen.getByTestId("Total price:");
    fireEvent.click(proceedToCheckoutButton);
  });

  it("handles payment with Razorpay", async () => {
    const mockRazorpay = {
      open: jest.fn(() => {
        const response = {
          razorpay_payment_id: "mockPaymentId",
        };
      }),
    };
     //@ts-ignore
    global.Razorpay = jest.fn((options) => mockRazorpay);

    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CartItems />
        </Provider>
      </ThemeProvider>
    );

    const proceedToCheckoutButton = screen.getByTestId("Proced");

    const increment = screen.getByTestId("increment0");
    const decrement = screen.getByTestId("decremnet0");
    fireEvent.click(increment);
    fireEvent.click(decrement);
    const apply20 = screen.getByTestId("apply20");
    const apply30 = screen.getByTestId("apply30");
    fireEvent.click(apply20);
    fireEvent.click(apply30);
    fireEvent.click(proceedToCheckoutButton);

    expect(mockRazorpay.open).toHaveBeenCalled();
  });
});
