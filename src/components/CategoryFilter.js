import React from 'react';
import PropTypes from 'prop-types';

const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const CategoryFilter = ({ filter, handleFilterChange }) => (
  <>
    <div className="filter">
      <span>Category</span>
      <select
        value={filter}
        name="filter"
        onChange={handleFilterChange}
      >
        {/* eslint-disable-next-line max-len */}
        <>{categories.map((category) => <option key={category} value={category}>{category}</option>)}</>
      </select>
    </div>
  </>
);

CategoryFilter.defaultProps = {
  handleFilterChange: null,
  filter: 'All',
};
CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func,
  filter: PropTypes.string,
};

export default CategoryFilter;
