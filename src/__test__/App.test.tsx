import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import App from '../App';
import { store } from '../redux/store';

describe('Renders App correctly', async () => {
  it('Should render the App correctly', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });
});
