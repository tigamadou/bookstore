import ADD_BOOK from '../actions/index';

const booksReducer = (previousState = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...previousState, action.book];
    default:
      return previousState;
  }
};

export default booksReducer;
