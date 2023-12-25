import { renderWithProviders } from 'testHelper';
import numberFormat from 'utils/numberFormat';
import useProductFormStore from 'stores/useProductFormStore';
import fixtures from '../../../../fixtures';
import Price from './Price';

const [product] = fixtures.products;

jest.mock('stores/useProductDetailStore', () => () => (product));
// 기존에는 값을 mocking에서 quantity에 2를 주입해눠서 사용했는데,
// store로 비즈니스 로직을 옮긴 후 store를 호출해주고 있다.
describe('Price', () => {
  it('renders price as formatted number', () => {
    const { changeQuantity } = useProductFormStore.getState();
    changeQuantity(2);

    const { container } = renderWithProviders(<Price />);

    const price = numberFormat(product.price * 2);
    expect(container).toHaveTextContent(`${price}원`);
  });
});
