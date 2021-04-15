import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  id, title, category, handleRemoveBook,
}) => (
  <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td><button type="button" onClick={() => handleRemoveBook({ id })}>Remove Book</button></td>
  </tr>
);

Book.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
  handleRemoveBook: PropTypes.func,
};

Book.defaultProps = {
  id: null,
  title: '',
  category: '',
  handleRemoveBook: null,
};

export default Book;
