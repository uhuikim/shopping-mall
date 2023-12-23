import { renderWithProviders } from 'testHelper';
import { screen } from '@testing-library/react';
import fixtures from '../../../../fixtures';
import Price from './Price';

const [product] = fixtures.products;
const { options } = product;

jest.mock('../../hooks/useProductDetailStore', () => () => [{ product }]);

jest.mock('../../hooks/useProductFormStore', () => () => [{
  options,
  selectedOptionItems: options.map((i) => i.items[0]),
  quantity: 2,
}]);

describe('Price', () => {
  it('renders price as formatted number', () => {
    renderWithProviders(<Price />);
    screen.getByText(/246,000원/);
  });
});
