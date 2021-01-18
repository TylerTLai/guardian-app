import { combineReducers } from 'redux';
import bookmarkReducer from './bookmarkReducer';
import articleReducer from './articleReducer';

export default combineReducers({
  articleReducer,
  bookmarkReducer,
});
