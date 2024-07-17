import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

describe('Renders Card correctly', async () => {
  it('Should render ErrorBoundary', async () => {
    render(<ErrorBoundary />);
    const errorText = await screen.findByTestId('errorText');
    expect(errorText).toBeInTheDocument();
  });
});
