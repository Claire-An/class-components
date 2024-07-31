import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, it, vi } from 'vitest';
import Flyout from '../components/flyout/flyout';
import { toggleFavorites } from '../redux/favorites.slice';
import { store } from '../redux/store';
import { mockCards } from './Mock';

URL['createObjectURL'] = vi.fn();

describe('Renders Flyout correctly', async () => {
  it('Should render the Flyout correctly', async () => {
    render(
      <Provider store={store}>
        <Flyout />
      </Provider>,
    );
  });

  it('Should render the Download correctly', async () => {
    store.dispatch(toggleFavorites(mockCards[0]));
    store.dispatch(toggleFavorites(mockCards[1]));
    store.dispatch(toggleFavorites(mockCards[2]));

    render(
      <Provider store={store}>
        <Flyout />
      </Provider>,
    );

    const flyout = await screen.getByTestId('flyout');
    expect(flyout).toBeInTheDocument();
    const countFavorites = await screen.getByTestId('countFavorites');
    expect(countFavorites).toHaveTextContent('3');
  });
});
