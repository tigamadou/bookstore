export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const defaultBook = {
  id: '',
  title: '',
  category: '',
};
export const createBook = (book = defaultBook) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = ({ id }) => ({
  type: REMOVE_BOOK,
  id,
});
