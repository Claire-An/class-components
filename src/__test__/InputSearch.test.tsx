import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import InputSearch from '../components/inputSearch/inputSearch';

const handleChange = vi.fn();
const value = 'text';

describe('Renders InputSearch correctly', async () => {
  it('Should render the InputSearch correctly', async () => {
    render(<InputSearch onHandleChange={handleChange} textSearch={value} />);

    const input = await screen.getByTestId('inputSearch');
    expect(input).toBeInTheDocument();
    await waitFor(() => expect(input).toHaveValue(value));
  });
});
