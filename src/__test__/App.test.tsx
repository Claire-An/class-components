import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from '../App';

describe('Renders App correctly', async () => {
  it('Should render the App correctly', async () => {
    render(<App />);
  });
});
