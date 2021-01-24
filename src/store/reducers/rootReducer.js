import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import bookmarkReducer from './bookmarkReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  articleReducer,
  bookmarkReducer,
  searchReducer,
});
