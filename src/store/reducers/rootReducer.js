import { combineReducers } from 'redux';
import bookmarkReducer from './bookmarkReducer';
import articleReducer from './articleReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  articleReducer,
  bookmarkReducer,
  searchReducer,
});
