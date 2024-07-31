import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, it } from 'vitest';
import NotFoundPage from '../page/NotFoundPage/NotFoundPage';
import { store } from '../redux/store';

describe('Renders NotFoundPage correctly', async () => {
  it('Should render the NotFoundPage correctly', async () => {
    render(
      <Provider store={store}>
        <NotFoundPage />
      </Provider>,
    );
  });

  it('Should render message', async () => {
    render(
      <Provider store={store}>
        <NotFoundPage />
      </Provider>,
    );
    const text = await screen.findByText('Страница не найдена');
    expect(text).toBeInTheDocument();
  });
});
