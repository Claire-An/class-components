import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, it } from 'vitest';
import Card from '../components/card/Card';
import CardList from '../components/card/CardList';
import { store } from '../redux/store';
import { mockCards } from './Mock';

describe('Renders Card correctly', async () => {
  it('Should render the Card correctly', async () => {
    render(
      <Provider store={store}>
        <Card card={mockCards[0]} />
      </Provider>,
    );
    const card = await screen.getByTestId('card');
    expect(card).toBeInTheDocument();
  });

  it('Should render the CardList correctly', async () => {
    render(
      <Provider store={store}>
        <CardList cards={mockCards} />
      </Provider>,
    );
    const countCard = (await screen.findAllByTestId('card')).length;
    expect(countCard).toBe(mockCards.length);
  });
});
