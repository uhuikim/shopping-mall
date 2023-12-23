import { renderWithProviders } from 'testHelper';
import { fireEvent, screen } from '@testing-library/react';
import Quantity from './Quantity';

const store = {
  quantity: 7,
  changeQuantity: jest.fn(),
};

jest.mock('../../../hooks/useProductFormStoreHooks', () => () => [store, store]);

const context = describe;

describe('Quantity', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders quantity', () => {
    renderWithProviders(<Quantity />);

    expect(screen.getByRole('textbox')).toHaveValue('7');
  });

  context('when "+" button is clicked', () => {
    it('calls "changeQUantity" action', () => {
      renderWithProviders(<Quantity />);

      fireEvent.click(screen.getByRole('button', { name: '+' }));

      expect(store.changeQuantity).toBeCalledWith(7 + 1);
    });
  });

  context('when "-" button is clicked', () => {
    it('calls "changeQUantity" action', () => {
      renderWithProviders(<Quantity />);

      fireEvent.click(screen.getByRole('button', { name: '-' }));

      expect(store.changeQuantity).toBeCalledWith(7 - 1);
    });
  });
});
