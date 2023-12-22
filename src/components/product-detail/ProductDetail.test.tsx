import { render, screen } from '@testing-library/react';
import useProductDetailStore from 'stores/useProductDetailStore';
import fixtures from '../../../fixtures';
import ProductDetail from './ProductDetail';

const [product] = fixtures.products;

test('ProductDetail', async () => {
  const fetchProduct = useProductDetailStore((state) => state.fetchProduct);

  await fetchProduct({ productId: product.id });

  render(<ProductDetail />);
  screen.getByText(product.name);
});
