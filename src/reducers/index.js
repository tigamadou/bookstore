import { createStore, combineReducers } from 'redux';
import booksReducer from './books';

const storeReducer = () => createStore(
  combineReducers({
    books: booksReducer,
  }),
);

export default storeReducer;
