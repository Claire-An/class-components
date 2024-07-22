import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import HomePage from '../page/homePage/homePage';

describe('Renders HomePage correctly', async () => {
  it('Should render the HomePage correctly', async () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>,
    );
  });

  it('Should render the buttonTheme correctly', async () => {
    render(<HomePage />);
    const buttonTheme = await screen.findByTestId('buttonTheme');
    expect(buttonTheme).toBeInTheDocument();
  });
});
