import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { getData } from '../api';

describe('Works API', async () => {
  it('should execute the function', async () => {
    const data = (await getData())?.data;
    expect(data).toHaveLength(20);
  });

  it('should execute the function with value', async () => {
    const data = (await getData('1'))?.data;
    expect(data).not.toHaveLength(0);
  });
});
