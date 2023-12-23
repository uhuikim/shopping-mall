import { renderWithProviders } from 'testHelper';
import { screen } from '@testing-library/react';
import fixtures from '../../../fixtures';
import LineItem from './LineItem';

describe('LineItem', () => {
  it('renders a line item', () => {
    const [lineItem] = fixtures.cart.lineItems;

    renderWithProviders((
      <table>
        <tbody>
          <LineItem lineItem={lineItem} />
        </tbody>
      </table>
    ));

    screen.getByText(lineItem.product.name);
  });
});
