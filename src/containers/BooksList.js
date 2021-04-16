import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../actions/index';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, removeBook, changeFilter, filter,
}) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  const handleFilterChange = (e) => {
    changeFilter(e.target.value);
  };

  return (

    <div>
      <CategoryFilter filter={filter} handleFilterChange={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <Book
              id={book.id}
              title={book.title}
              category={book.category}
              key={book.id}
              handleRemoveBook={handleRemoveBook}
            />
          ))}
        </tbody>
      </table>
    </div>

  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  removeBook: PropTypes.func,
  changeFilter: PropTypes.func,
  filter: PropTypes.string,
};

BooksList.defaultProps = {
  books: [],
  removeBook: null,
  changeFilter: null,
  filter: 'All',
};

const mapDispatchToProps = (dispatch) => ({
  removeBook: (id) => dispatch(removeBook(id)),
  changeFilter: (filter) => dispatch(changeFilter(filter)),
});
const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
