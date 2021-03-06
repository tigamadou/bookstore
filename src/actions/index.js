export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const defaultBook = {
  id: '',
  title: '',
  category: '',
};
export const createBook = (book = defaultBook) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter,
});
