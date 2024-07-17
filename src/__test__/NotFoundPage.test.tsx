import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import NotFoundPage from '../page/NotFoundPage/NotFoundPage';

describe('Renders NotFoundPage correctly', async () => {
  it('Should render the NotFoundPage correctly', async () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>,
    );
  });

  it('Should render message', async () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>,
    );
    const text = await screen.findByText('Страница не найдена');
    expect(text).toBeInTheDocument();
  });
});
