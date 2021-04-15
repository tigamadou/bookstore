import ADD_BOOK from '../actions/index';

const bookReducer = (previousState = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...previousState, action.book];
    default:
      return previousState;
  }
};

export default bookReducer;
