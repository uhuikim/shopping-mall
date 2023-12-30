import { renderWithProviders } from 'testHelper';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import Header from './Header';

const navigate = jest.fn();

let accessToken = '';
const setAccessToken = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => navigate,
}));

jest.mock('hooks/useAccessToken', () => () => ({
  accessToken,
  setAccessToken,
}));

jest.mock('hooks/useFetchCategories', () => () => ({
  categories: [],
}));

const context = describe;

describe('Header', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

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

    it('renders “Logout” button', async () => {
      renderWithProviders(<Header />);

      const button = screen.getByRole('button', { name: 'Logout' });

      fireEvent.click(button);

      await waitFor(() => {
        expect(setAccessToken).toBeCalledWith('');
        expect(navigate).toBeCalledWith('/');
      });
    });
  });
});
