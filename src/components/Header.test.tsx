import { renderWithProviders } from 'testHelper';

import { screen } from '@testing-library/react';
import Header from './Header';

jest.mock('../hooks/useFetchCategories', () => () => ({
  categories: [],
}));

test('Header', () => {
  renderWithProviders(<Header />);

  screen.getByText(/Shop/);
  screen.getByRole('link', { name: 'Home' });
});
