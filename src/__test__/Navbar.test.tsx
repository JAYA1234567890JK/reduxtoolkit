import { ThemeProvider, createTheme } from "@mui/material";
import { Store, AnyAction } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Navabar from "../screens/Navabar";
import { fireEvent, render, screen } from "@testing-library/react";
const mockStore = configureStore([]);
const theme = createTheme();
describe("Navbar Component", () => {
  let store: Store<unknown, AnyAction>;
  beforeEach(() => {
    store = mockStore({
      productsSlice: {
        shopingCart: [],
        favarateToCartArr: [],
      },
    });
  });
  it("renders cart items when there are items in the cart", () => {
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Navabar />
        </Provider>
      </ThemeProvider>
    );
    const getPlaceholder = screen.getByPlaceholderText('Search products')
    fireEvent.change(getPlaceholder,{target:{value:'text'}})
    fireEvent.change(getPlaceholder,{target:{value:''}})
  });
});
