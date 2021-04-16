import { ADD_BOOK, REMOVE_BOOK } from '../actions/index';

const booksReducer = (previousState = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...previousState, action.book];
    case REMOVE_BOOK:
      return previousState.filter((book) => book.id !== action.id);
    default:
      return previousState;
  }
};

export default booksReducer;
