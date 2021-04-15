import React, { useState } from 'react';

const BooksForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCatagory] = useState('');
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onCategoryChange = (e) => {
    setCatagory(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={onTitleChange}
        />
        <select value={category} onChange={onCategoryChange}>
          {categories.map((cat) => <option value={cat} key={cat}>{cat}</option>)}
        </select>
        <button type="submit">Save Book</button>
      </form>
    </div>
  );
};

export default BooksForm;
