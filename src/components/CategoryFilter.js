import React from 'react';
import PropTypes from 'prop-types';

const categories = ['All', ...['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi']];
const CategoryFilter = ({ filter, handleFilterChange }) => (
  <div className="category_filter">
    <span>Category</span>
    <select
      value={filter}
      name="filter"
      onChange={handleFilterChange}
    >
      {categories.map((cat) => <option value={cat} key={cat}>{cat}</option>)}
    </select>
  </div>
);

CategoryFilter.propTypes = {
  filter: PropTypes.string,
  handleFilterChange: PropTypes.func,
};

CategoryFilter.defaultProps = {
  filter: 'All',
  handleFilterChange: null,
};

export default CategoryFilter;
