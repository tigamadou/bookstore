import React from 'react';
import PropTypes from 'prop-types';

const categories = ['All', ...['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi']];
const CategoryFilter = ({ filter }) => (
  <select
    value={filter}
    name="filter"
  >
    {categories.map((cat) => <option value={cat} key={cat}>{cat}</option>)}
  </select>
);

CategoryFilter.propTypes = {
  filter: PropTypes.string,
};

CategoryFilter.defaultProps = {
  filter: 'All',
};

export default CategoryFilter;
