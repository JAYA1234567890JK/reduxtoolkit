import { ThemeProvider, createTheme } from "@mui/material";
import { Store, AnyAction } from "@reduxjs/toolkit";
import { render,getByTestId, fireEvent } from "@testing-library/react";
import { title } from "process";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import FavrateItems from "../screens/FavrateItems";

const mockStore = configureStore([]);
const theme = createTheme();




describe("Favarates noitems componet", () => {
  let store: Store<unknown, AnyAction>;
  store = mockStore({
    productsSlice: {
      favarateToCartArr: [],
    }, 
  });

  
 let  storefav = mockStore({
    productsSlice: {
      favarateToCartArr: [
        {
            title:"jahah",
            image:"img",
        }
      ],
    },
  });

  it("renders favrates items", () => {
   const {getByTestId} = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <FavrateItems />
        </Provider>
      </ThemeProvider>
    );


  });
  it("favartes items in the componet",() =>{
    const {getByTestId} = render(
        <ThemeProvider theme={theme}>
          <Provider store={storefav}>
            <FavrateItems />
          </Provider>
        </ThemeProvider>
      );
        const favarIcon = getByTestId("favar-icon")
  fireEvent.click(favarIcon)
  })
});
