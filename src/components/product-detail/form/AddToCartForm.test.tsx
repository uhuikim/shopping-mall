import useProductDetailStore from 'stores/useProductDetailStore';
import { renderWithProviders } from 'testHelper';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import fixtures from '../../../../fixtures';
import AddToCartForm from './AddToCartForm';

test('AddToCartForm', async () => {
  // const [product] = fixtures.products;
  // const fetchProduct = useProductDetailStore((state) => state.fetchProduct);

  // await fetchProduct({ productId: product.id });

  renderWithProviders(<AddToCartForm />);
  fireEvent.click(screen.getByText('장바구니에 담기'));

  await waitFor(() => {
    screen.getByText(/장바구니에 담았습니다/);
  });
});
