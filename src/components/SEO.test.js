import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SEO from './SEO';

test.each([
  [
    '/services',
    'Pest Control Services in Pune & Ahmednagar | Nath Pest',
    'index, follow',
  ],
  [
    '/contacts',
    'Contact Nath Pest Management | Pune & Ahmednagar',
    'index, follow',
  ],
  ['/unknown-page', 'Page Not Found | Nath Pest Management', 'noindex, nofollow'],
])('sets page metadata for %s', async (path, title, robots) => {
  render(
    <MemoryRouter initialEntries={[path]}>
      <SEO />
    </MemoryRouter>,
  );

  await waitFor(() => expect(document.title).toBe(title));
  expect(document.querySelector('meta[name="robots"]')).toHaveAttribute(
    'content',
    robots,
  );
  expect(document.querySelector('meta[name="description"]')).not.toBeNull();
});
