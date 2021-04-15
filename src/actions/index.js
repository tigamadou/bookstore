export const ADD_BOOK = 'ADD_BOOK';

export const defaultBook = {
  id: '',
  title: '',
  category: '',
};
export const createBook = (defaultBook) => ({
  type: ADD_BOOK,
  book: defaultBook,
});

export const removeBook = ({ id }) => ({
  type: 'REMOVE_BOOK',
  id,
});
