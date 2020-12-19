import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store'
import App from './App';

test('App renders', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});