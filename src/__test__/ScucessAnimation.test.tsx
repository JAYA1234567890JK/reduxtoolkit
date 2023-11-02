import { ThemeProvider, createTheme } from '@mui/material';
import SuccessPopup from '../screens/SuccessPopup';
import { Provider } from 'react-redux';
import { store } from '../redux/Store';
import { render } from '@testing-library/react';


const theme = createTheme();

it("renders cart items when there are items in the cart", () => {
    const {getByTestId} = render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <SuccessPopup/>
        </Provider>
      </ThemeProvider>
    );
    const iconButon =getByTestId("icon");
    expect(iconButon).toBeDefined();
  });





















