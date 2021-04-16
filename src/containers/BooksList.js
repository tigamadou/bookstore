import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Book from '../components/Book';

const BooksList = ({ books }) => (
  <div>
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
          <Book id={book.id} title={book.title} category={book.category} key={book.id} />
        ))}
      </tbody>
    </table>
  </div>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
};

BooksList.defaultProps = {
  books: [],
};

const mapStateToProps = (state) => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);
