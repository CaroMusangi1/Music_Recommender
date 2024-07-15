#!/usr/bin/node
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Music Recommender title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Music Recommender/i);
  expect(linkElement).toBeInTheDocument();
});
