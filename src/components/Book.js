import React from 'react';

const Book = (book) => {
  const {
    id, title, category, handleRemoveBook,
  } = book;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td><button type="button" onClick={() => handleRemoveBook({ id })}>Remove</button></td>
    </tr>
  );
};

export default Book;
