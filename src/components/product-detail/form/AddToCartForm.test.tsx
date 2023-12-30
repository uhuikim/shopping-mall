import useProductDetailStore from 'stores/useProductDetailStore';
import { renderWithProviders } from 'testHelper';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import fixtures from '../../../../fixtures';
import AddToCartForm from './AddToCartForm';

let accessToken = '';

jest.mock('hooks/useAccessToken', () => () => ({
  get accessToken() {
    return accessToken;
  },
}));

const context = describe;

describe('AddToCartForm', () => {
  const [product] = fixtures.products;

  beforeEach(async () => {
    const fetchProduct = useProductDetailStore((state) => state.fetchProduct);
    await fetchProduct({ productId: product.id });
  });

  context("when the current user isn't logged in", () => {
    beforeEach(() => {
      accessToken = '';
    });

    it('renders message', () => {
      const { container } = renderWithProviders(<AddToCartForm />);

      expect(container).toHaveTextContent('주문하려면 로그인하세요');
    });
  });

  context('when the current user is logged in', () => {
    beforeEach(() => {
      accessToken = 'ACCESS-TOKEN';
    });

    it('renders “Add To Cart” button', async () => {
      renderWithProviders(<AddToCartForm />);

      fireEvent.click(screen.getByText('장바구니에 담기'));

      await waitFor(() => {
        screen.getByText(/장바구니에 담았습니다/);
      });
    });
  });
});
