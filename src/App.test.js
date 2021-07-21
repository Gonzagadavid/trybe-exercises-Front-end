import React from 'react';
// import { render } from '@testing-library/react';
import App from './App';
import renderWithRouter from './renderWithRouter'

test('renders learn react link', () => {
  const { getByText } = renderWithRouter(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
