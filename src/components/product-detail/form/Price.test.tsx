import { renderWithProviders } from 'testHelper';
import numberFormat from 'utils/numberFormat';
import useProductFormStore from 'stores/useProductFormStore';
import fixtures from '../../../../fixtures';
import Price from './Price';

const [product] = fixtures.products;

describe('Price', () => {
  const quantity = 2;

  beforeEach(() => {
    const { changeQuantity, setProduct } = useProductFormStore.getState();
    changeQuantity(quantity);
    setProduct(product);
  });

  it('renders price as formatted number', () => {
    const { container } = renderWithProviders(<Price />);

    const price = numberFormat(product.price * 2);
    expect(container).toHaveTextContent(`${price}원`);
  });
});
