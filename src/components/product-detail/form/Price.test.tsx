import { renderWithProviders } from 'testHelper';
import { screen } from '@testing-library/react';
import fixtures from '../../../../fixtures';
import Price from './Price';

const [product] = fixtures.products;

jest.mock('stores/useProductDetailStore', () => () => (product));

jest.mock('stores/useProductFormStore', () => () => 2);

describe('Price', () => {
  it('renders price as formatted number', () => {
    renderWithProviders(<Price />);
    screen.getByText(/256,000원/);
  });
});
