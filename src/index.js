import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import storeReducer from './reducers/index';
import { createBook } from './actions/index';

const store = storeReducer();

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

for (let i = 0; i < categories.length; i += 1) {
  store.dispatch(createBook({ id: Math.random().toString(36).substr(2, 16), title: `Book ${i + 1}`, category: categories[i] }));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
