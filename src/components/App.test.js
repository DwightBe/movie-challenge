import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from './App';
import reducers from "../reducers";

const store = createStore(reducers);

test('renders movie search', () => {
  render(<Provider store={store}><App /></Provider>);
  const linkElement = screen.getByText(/Movie Search/i);
  expect(linkElement).toBeInTheDocument();
});
