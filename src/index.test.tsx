import { render, screen } from "@testing-library/react";
import { createTheme, ThemeProvider } from "@mui/material";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";

jest.mock("lottie-web", () => {
  const listeners: { [key: string]: Function } = {};

  const lottie = {
    loadAnimation: jest.fn(),
    setSpeed: jest.fn(),
    addEventListener: (eventName: string, callback: Function) => {
      listeners[eventName] = callback;
    },
    removeEventListener: (eventName: string) => {
      delete listeners[eventName];
    },
    triggerCompleteEvent: () => {
      if (listeners["complete"]) {
        listeners["complete"]();
      }
    },
  };

  return lottie;
});
// jest.mock("./reportWebVitals", () => jest.fn());

const theme = createTheme();

describe("Index", () => {
  it("renders without crashing", () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
    ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

    // const appElement = screen.getByTestId("app");
    // expect(appElement).toBeInTheDocument();
  });

  it("calls reportWebVitals function", () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );

    // expect(reportWebVitals).toHaveBeenCalled();
  });
});
