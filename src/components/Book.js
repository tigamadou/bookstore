import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  id, title, category,
}) => (
  <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
  </tr>
);

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
};

Book.defaultProps = {
  id: null,
  title: '',
  category: '',
};

export default Book;
