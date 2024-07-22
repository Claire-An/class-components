import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import ButtonSearch from '../components/buttonSearch/buttonSearch';

describe('Renders HomePage correctly', async () => {
  it('Should render the ButtonSearch correctly', async () => {
    render(<ButtonSearch onButtonClick={() => {}} value={''} />);
  });
});
