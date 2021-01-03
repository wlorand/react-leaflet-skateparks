import { render, screen } from '@testing-library/react';
import App from './App';

test('renders mappy text', () => {
  render(<App />);
  const linkElement = screen.getByText(/mappy/i);
  expect(linkElement).toBeInTheDocument();
});
