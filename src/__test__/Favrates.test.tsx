import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Favarotes from "../screens/Favarotes";
import { Provider } from "react-redux";
import { store } from "../redux/Store";

describe("Favarotes Component", () => {
  it("should close inside the menu", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Favarotes />
      </Provider>
    );
    const iconButton1 = getByTestId("open");
    fireEvent.click(iconButton1);
    const iconButton = getByTestId("close");
    fireEvent.click(iconButton);
  });
});
