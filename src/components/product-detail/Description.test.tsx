import { screen } from '@testing-library/react';
import { renderWithProviders } from 'testHelper';
import Description from './Description';

const context = describe;

describe('Description', () => {
  context('When text is empty', () => {
    const text = '';
    it('renders nothing', () => {
      const { container } = renderWithProviders(<Description value={text} />);

      expect(container).toBeEmptyDOMElement();
    });
  });

  context('When text is not empty', () => {
    const lines = ['1st line', '2nd line', '3rd line'];
    const text = lines.join('\n');

    it('renders multi-line text', () => {
      renderWithProviders(<Description value={text} />);

      lines.forEach((line) => {
        screen.getByText(line);
      });
    });
  });
});
