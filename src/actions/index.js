const ADD_BOOK = 'ADD_BOOK';
const generateId = () => Math.random().toString(36).substr(2, 5);

const defaultBook = {
  id: generateId(),
  title: '',
  category: '',
};
const createBook = () => ({
  type: ADD_BOOK,
  book: defaultBook,
});

export default { ADD_BOOK, createBook };
