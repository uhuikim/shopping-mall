import { renderWithProviders } from 'testHelper';
import { OrderOption } from 'types';
import Options from './Options';
import fixtures from '../../../fixtures';

const context = describe;

describe('Options', () => {
  context('when options is empty', () => {
    const options: OrderOption[] = [];

    it('renders nothing', () => {
      const { container } = renderWithProviders(<Options options={options} />);
      expect(container).toBeEmptyDOMElement();
    });
  });

  context('when options is not empty', () => {
    const [lineItem] = fixtures.cart.lineItems;
    const { options } = lineItem;

    it('renders options text', () => {
      const { container } = renderWithProviders(<Options options={options} />);

      const optionName = options[0].name;
      const itemName = options[0].item.name;

      expect(container).toHaveTextContent(`${optionName} : ${itemName}`);
    });
  });
});
