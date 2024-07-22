import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Pagination from '../components/Pagination/Pagination';

describe('Renders HomePage correctly', async () => {
  it('Should render the Pagination correctly', async () => {
    render(
      <Pagination
        current={1}
        leftDisable={false}
        rightDisable={true}
        total={10}
        onNextClick={() => {}}
        onPrevClick={() => {}}
      />,
    );
  });
});
