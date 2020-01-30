import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the page heading', () => {
  const { getByText } = render();
  const linkElement = getByText(/Things To Do/i)
  expect(linkElement).toBeInTheDocument();
});
