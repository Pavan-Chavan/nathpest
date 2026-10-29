import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page and sets its SEO title', async () => {
  render(<App />);

  expect(
    await screen.findByText(/no 1 pest control services/i),
  ).toBeInTheDocument();
  expect(document.title).toBe(
    'Pest Control in Pune & Ahmednagar | Nath Pest Management',
  );
  expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
    'content',
    'Nath Pest Management provides residential and commercial pest control in Pune and Ahmednagar, Maharashtra. Request an inspection and service advice.',
  );
});
