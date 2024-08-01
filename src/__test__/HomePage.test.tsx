import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, it } from 'vitest';
import HomePage from '../page/homePage/homePage';
import { store } from '../redux/store';

describe('Renders HomePage correctly', async () => {
  it('Should render the HomePage correctly', async () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
  });

  it('Should render the buttonTheme correctly', async () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
    const buttonTheme = await screen.findByTestId('buttonTheme');
    expect(buttonTheme).toBeInTheDocument();
  });
});
