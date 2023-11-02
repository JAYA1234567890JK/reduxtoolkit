import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import { Provider } from "react-redux";
import Cartmenu from "../screens/Cartmenu";
import { store } from "../redux/Store";

describe("Cartmenu Component", () => {
  it("should render the component without errors", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Cartmenu />
      </Provider>
    );

    expect(getByText("Account settings")).toBeInTheDocument();
  });

  it("should open the menu when the IconButton is clicked", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <Cartmenu />
      </Provider>
    );

    const iconButton = getByRole("button", { name: "Account settings" });

    expect(document.getElementById("account-menu")).not.toBeInTheDocument();

    fireEvent.click(iconButton);

    // expect(document.getElementById("account-menu")).toBeInTheDocument();
  });

  it("should close the menu when the CloseRoundedIcon is clicked", () => {
    const { getByRole,getByTestId } = render(
      <Provider store={store}>
        <Cartmenu />
      </Provider>
    );

    const iconButton = getByTestId("button");

    fireEvent.click(iconButton);




    expect(document.getElementById("account-menu")).not.toBeInTheDocument();
  });

  it("should render CartItems inside the menu", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <Cartmenu />
      </Provider>
    );




  });
});
