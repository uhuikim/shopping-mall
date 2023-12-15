import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('render', () => {
    render(<App />);

    screen.getAllByText('쇼핑몰 만들기');
  });
});
