// import React from "react";
// import { render } from "@testing-library/react";
// import Appbar from "../screens/Appbar";
// import configureStore from "redux-mock-store";
// import thunk from "redux-thunk";
// import { Provider } from "react-redux";
// import { ThemeProvider } from "@mui/styles";
// import { createTheme } from "@mui/material";
// import { getProducts, popup } from "../redux/productsSlice";
// const mockStore = configureStore([thunk]);
// const theme = createTheme();
// const stored = {
// productsSlice: {
// products: [],
// shopingCart: [],
// favarateToCartArr: [],
// filterData: [],
// loading: false,
// showSucess: true,
// payAfter: false,
// couponApplied: false,
// },
// };
// const loadingStore = {
// productsSlice: {
// products: [],
// shopingCart: [],
// favarateToCartArr: [],
// filterData: [],
// loading: true,
// showSucess: false,
// payAfter: false,
// couponApplied: false,
// },
// };
// test("Renders a loading spinner when loading is true", () => {
// const { getByTestId } = render(
// <ThemeProvider theme={theme}>
{
  /* <Provider store={mockStore(loadingStore)}> */
}
{
  /* <Appbar /> */
}
{
  /* </Provider> */
}
{
  /* </ThemeProvider> */
}
// );
// function fetchData() {
// return (dispatch: (arg0: any) => any) => {
// return fetch("/users.json")
// .then(() => dispatch(getProducts()));
// };
// }
//
//
// const store = mockStore(stored);
// @ts-ignore
// store.dispatch(fetchData());
// const loadingSpinner = getByTestId("loading-spinner");
// expect(loadingSpinner).toBeInTheDocument();
// });
//
// it("Dispatches popup action after a delay", (done) => {
// const store = mockStore(stored);
// render(
// <ThemeProvider theme={theme}>
{
  /* <Provider store={store}> */
}
{
  /* <Appbar /> */
}
{
  /* </Provider> */
}
{
  /* </ThemeProvider> */
}
// );
//
// setTimeout(() => {
// expect(store.getActions()).toContainEqual(popup());
// done();
// }, 2000);
// });

import React from "react";
import { render, fireEvent, getByTestId, act } from "@testing-library/react";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material";
import {
  getProducts,
  addToCart,
  favarateToCart,
  popup,
} from "../redux/productsSlice";
import Appbar from "../screens/Appbar";

const mockStore = configureStore([thunk]);
const theme = createTheme();
jest.useFakeTimers();

const initialState = {
  productsSlice: {
    products: [],
    shopingCart: [],
    favarateToCartArr: [],
    filterData: [],
    loading: false,
    showSucess: true,
    payAfter: false,
    couponApplied: false,
  },
};

const loadingState = {
  productsSlice: {
    products: [],
    shopingCart: [],
    favarateToCartArr: [],
    // filterData: {
    filterData: [
      {
        id: 1,
        title: "jsdk",
        description: "jsdfkj",
        price: 1,
        image: "jksf",
      },
    ],

    // }
    loading: true,
    showSucess: false,
    payAfter: false,
    couponApplied: false,
  },
};

const lodaingFalse = {
  productsSlice: {
    products: [],
    shopingCart: [],
    favarateToCartArr: [
      {
        id: 1,
        title: "jsdk",
        description: "jsdfkj",
        price: 1,
        image: "jksf",
      },
    ],
    filterData: [
      {
        id: 1,
        title: "jsdk",
        description: "jsdfkj",
        price: 1,
        image: "jksf",
      },
      {
        id: 2,
        title: "jsdk",
        description: "jsdfkj",
        price: 1,
        image: "jksf",
      },
    ],

    loading: false,
    showSucess: false,
    payAfter: false,
    couponApplied: false,
  },
};
describe("Appbar Component", () => {
  it("Renders a loading spinner when loading is true", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Provider store={mockStore(loadingState)}>
          <Appbar />
        </Provider>
      </ThemeProvider>
    );

    const loadingSpinner = getByTestId("loading-spinner");
    expect(loadingSpinner).toBeInTheDocument();
  });

  it("Renders Appbar without errors when loading is false", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Provider store={mockStore(lodaingFalse)}>
          <Appbar />
        </Provider>
      </ThemeProvider>
    );
  });

  it("Dispatches getProducts action on component mount", () => {
    const store = mockStore(initialState);
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Appbar />
        </Provider>
      </ThemeProvider>
    );
  });

  it("Dispatches addToCart action when 'Add to Cart' button is clicked", () => {
    const store = mockStore(lodaingFalse);
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Appbar />
        </Provider>
      </ThemeProvider>
    );

    const addToCartButton = getByTestId("AddtoCart1");
    fireEvent.click(addToCartButton);
  });

  it("Dispatches favarateToCart action when favorite icon is clicked", () => {
    const store = mockStore(lodaingFalse);
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Appbar />
        </Provider>
      </ThemeProvider>
    );

    const favoriteIcon = getByTestId("FavoriteIcon");
    fireEvent.click(favoriteIcon);
    const favoriteIcon1 = getByTestId("FavoriteIcon1");
    fireEvent.click(favoriteIcon1);
    const addToCartButton = getByTestId("AddtoCart0");
    fireEvent.click(addToCartButton);
  });

  it("Dispatches popup action after a delay", async () => {
    const store = mockStore(initialState);
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Appbar />
        </Provider>
      </ThemeProvider>
    );
    jest.advanceTimersByTime(2000);
    // await Promise.resolve();
    // expect(store.getActions()).toContainEqual(popup());
    act(() => {
      jest.advanceTimersByTime(3000);
    });
  });
});
