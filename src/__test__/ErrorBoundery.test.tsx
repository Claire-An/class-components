import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, it } from 'vitest';
import App from '../App';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import { store } from '../redux/store';

describe('Renders ErrorBoundary correctly', () => {
  it('Should render the ErrorBoundary correctly', () => {
    render(
      <Provider store={store}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Provider>,
    );
  });
});
