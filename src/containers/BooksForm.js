import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

const BooksForm = ({ createBook }) => {
  const [title, setTitle] = useState('');
  const [category, setCatagory] = useState('');
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi', 'Economy'];

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const onCategoryChange = (e) => {
    setCatagory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;
    createBook({
      id: Date.now(),
      title: title.trim(),
      category,
    });

    setTitle('');
    setCatagory('Action');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={handleChange}
        />
        <select value={category} onChange={onCategoryChange}>
          {categories.map((cat) => <option value={cat} key={cat}>{cat}</option>)}
        </select>
        <button type="submit">Save Book</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
});

BooksForm.propTypes = {
  createBook: PropTypes.func,
};

BooksForm.defaultProps = {
  createBook: null,
};
export default connect(undefined, mapDispatchToProps)(BooksForm);
