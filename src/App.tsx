import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Appbar from "./screens/Appbar";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import CartItems from "./screens/CartItems";
import Navabar from "./screens/Navabar";
import { Box, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
const theme = createTheme();
export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme} data-testid = "app">
      <Box >

        <Provider store={store}>
          <BrowserRouter>
            <Navabar shopingCart={undefined} />
            <Routes>
              <Route path="/" element={<Appbar />} />

              <Route path="/cart" element={<CartItems classes={undefined} />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </Box>
      </ThemeProvider>
    );
  }
}
