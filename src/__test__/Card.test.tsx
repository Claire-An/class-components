import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { getData } from '../api';
import Card, { CardForm } from '../components/card/Card';
import CardList from '../components/card/CardList';

const cardData: CardForm = {
  id: 1,
  name: 'Name',
  gender: 'Male',
  image: '1.png',
};

describe('Renders Card correctly', async () => {
  it('Should render the Card correctly', async () => {
    render(<Card card={cardData} />);
    const card = await screen.findByTestId('card');
    expect(card).toBeInTheDocument();
  });

  it('Should render the CardList correctly', async () => {
    const data = (await getData())?.data || [];

    render(<CardList cards={data} />);
  });
});
