import { CHANGE_FILTER } from '../actions/index';

const filterReducer = (previousState = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return previousState;
  }
};

export default filterReducer;
