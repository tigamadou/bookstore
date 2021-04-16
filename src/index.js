import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/styles/app.scss';
import App from './components/App';
import storeReducer from './reducers/index';
import { createBook } from './actions/index';

const store = storeReducer();

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi', 'Economy'];

store.dispatch(createBook({ id: Date.now(), title: 'The Hunger Games', category: categories[0] }));
store.dispatch(createBook({ id: Date.now() + 1, title: 'Dune', category: categories[6] }));
store.dispatch(createBook({ id: Date.now() + 2, title: 'Capital in the Twenty-First Century', category: categories[7] }));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
