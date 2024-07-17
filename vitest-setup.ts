import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';
//import matchers from '@testing-library/jest-dom/matchers';

//expect.extend(matchers);

//Очистка DOM после каждого теста
afterEach(() => {
  cleanup();
});
