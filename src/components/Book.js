import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';

const Book = ({
  id, title, category, handleRemoveBook,
}) => (
  <>
    <div className="card">
      <div className="card-content">
        <div className="info">
          <div className="info_content">
            <div>
              <div className="category"><span>{ category }</span></div>
              <div className="title"><span>{ title }</span></div>
              <div className="author"><span>John Doe</span></div>
            </div>
          </div>
          <div className="footer">
            <ul>
              <li><a href="/#">Comments</a></li>
              <li><a href="/#" role="button" onClick={() => handleRemoveBook({ id })}>Remove</a></li>
              <li><a href="/#">Edit</a></li>
            </ul>
          </div>
        </div>
        <div className="details">
          <div className="leaning">
            <div className="leaning_chart">
              <div>
                <CircularProgressbar value={57} maxValue={100} />
              </div>
            </div>
            <div className="leaning_details">
              <div className="leaning_value"><span>57 %</span></div>
              <div className="leaning_text"><span>Completed</span></div>
            </div>
          </div>
          <div className="chapter">
            <div className="bootk_chapter_text"><span>Current chapter</span></div>
            <div className="bootk_chapter_value"><span>Chapter 17</span></div>
            <div className="chapter_update">
              <button type="button" className="button">Update progress</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>

);

Book.defaultProps = {
  title: '',
  id: null,
  handleRemoveBook: null,
  category: 'All',
};

Book.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  handleRemoveBook: PropTypes.func,
  category: PropTypes.string,
};

export default Book;
