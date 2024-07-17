import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from '../App';

describe('Renders NotFoundPage correctly', async () => {
  it('Should render the NotFoundPage correctly', async () => {
    render(<App />);
  });
});
