import { renderWithProviders } from 'testHelper';
import { screen } from '@testing-library/react';
import Header from './Header';

let accessToken = '';

jest.mock('hooks/useAccessToken', () => () => ({
  get accessToken() {
    return accessToken;
  },
}));

jest.mock('hooks/useFetchCategories', () => () => ({
  categories: [],
}));

const context = describe;

describe('Header', () => {
  it('renders title', () => {
    renderWithProviders(<Header />);

    screen.getByText(/Shop/);
  });

  it('renders basic link', () => {
    renderWithProviders(<Header />);

    screen.getByRole('link', { name: 'Home' });
  });

  context("when the current user isn't logged in", () => {
    beforeEach(() => {
      accessToken = '';
    });

    it('renders “Login” link', () => {
      renderWithProviders(<Header />);

      screen.getByRole('link', { name: 'Login' });
    });
  });

  context('when the current user is logged in', () => {
    beforeEach(() => {
      accessToken = 'ACCESS-TOKEN';
    });

    it('renders “Cart” link', () => {
      renderWithProviders(<Header />);

      screen.getByRole('link', { name: 'Cart' });
    });

    it('renders “Logout” button', () => {
      renderWithProviders(<Header />);

      screen.getByRole('button', { name: 'Logout' });
    });
  });
});
