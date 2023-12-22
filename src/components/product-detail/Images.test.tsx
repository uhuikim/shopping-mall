import '@testing-library/jest-dom';
import { Image } from 'types';
import { screen } from '@testing-library/react';
import { renderWithProviders } from 'testHelper';
import Images from './Images';

const context = describe;

describe('Images', () => {
  context('when images is empty', () => {
    const images: Image[] = [];

    it('renders nothing', () => {
      const { container } = renderWithProviders(<Images images={images} />);
      expect(container).toBeEmptyDOMElement();
    });
  });

  context('when images is not empty', () => {
    const images: Image[] = [{ url: 'http://example.com/test.jpg' }];

    it('renders image', () => {
      renderWithProviders(<Images images={images} />);
      screen.getByRole('img');
    });
  });
});
