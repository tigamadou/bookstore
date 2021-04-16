import { createStore, combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';

const storeReducer = () => createStore(
  combineReducers({
    books: booksReducer,
    filter: filterReducer,
  }),
);

export default storeReducer;
