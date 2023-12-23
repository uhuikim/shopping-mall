import { renderWithProviders } from 'testHelper';
import { screen } from '@testing-library/react';
import SubmitButton from './SubmitButton';

let done = false;
const store = {
  get done() {
    return done;
  },
  addToCart: jest.fn(),
};

jest.mock('../../hooks/useProductFormStore', () => () => [store, store]);

const context = describe;

describe('SubmitButton', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('when the button is ready', () => {
    beforeEach(() => {
      done = false;
    });

    it('renders a submit button', () => {
      renderWithProviders(<SubmitButton />);

      expect(screen.getByRole('button')).toHaveTextContent('장바구니에 담기');
    });
  });

  context('when submitting is done', () => {
    beforeEach(() => {
      done = true;
    });

    it('renders a done message', () => {
      renderWithProviders(<SubmitButton />);

      screen.getByText(/장바구니에 담았습니다/);
    });
  });
});
