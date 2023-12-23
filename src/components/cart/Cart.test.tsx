import { renderWithProviders } from 'testHelper';
import { screen } from '@testing-library/react';
import Cart from './Cart';
import fixtures from '../../../fixtures';

const context = describe;

describe('Cart', () => {
  context('when the cart is empty', () => {
    const cart = {
      lineItems: [],
      totalPrice: 0,
    };

    it('renders the empty message', () => {
      renderWithProviders(<Cart cart={cart} />);

      screen.getByText(/비었습니다/);
    });
  });

  context('when the cart has a line item', () => {
    const { cart } = fixtures;

    it('renders a line item', () => {
      renderWithProviders(<Cart cart={cart} />);

      screen.getByText(cart.lineItems[0].product.name);
    });
  });
});
