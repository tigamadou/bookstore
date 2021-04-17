import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';

const Book = ({
  id, title, category, handleRemoveBook,
}) => (

  <div className="book_card">
    <div className="book_info">
      <div className="info_content">
        <div className="book_category">{category}</div>
        <div className="book_title">{title}</div>
        <div className="book_author">Author</div>
      </div>
      <div className="info_footer">
        <ul>
          <li><a href="/#">Comments</a></li>
          <li><a href="/#" role="button" onClick={() => handleRemoveBook({ id })}>Remove</a></li>
          <li><a href="/#">Edit</a></li>
        </ul>
      </div>
    </div>
    <div className="book_details">
      <div className="book_progress">
        <div className="book_progress_chart">
          <CircularProgressbar value={64} maxValue={100} />
        </div>
        <div className="book_progress_details">
          <div className="book_progress_value">64%</div>
          <div className="book_progress_text">Completed</div>
        </div>
      </div>
      <div className="book_chapter">
        <div className="bootk_chapter_text">
          Current chapter
        </div>
        <div className="bootk_chapter_value">
          Chapter 17
        </div>
        <div className="book_chapter_update">
          <button type="button" className="button">Update progress</button>
        </div>
      </div>
    </div>
  </div>

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
  category: 'All',
  handleRemoveBook: null,
};

export default Book;
