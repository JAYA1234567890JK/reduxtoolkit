import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
jest.mock("lottie-web", () => {
  const lottie = {
    loadAnimation: jest.fn(),
    setSpeed: jest.fn(),
    destroyMock: jest.fn(),
  };
  return lottie;
});
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
