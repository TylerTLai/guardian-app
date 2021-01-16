import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  VIEW_BOOKMARK,
} from '../actions/bookmark';

const initialState = {
  bookmarks: [],
};

function bookmarkReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOKMARK:
      return state;
    case REMOVE_BOOKMARK:
      return state;
    case VIEW_BOOKMARK:
      return state;
    default:
      return state;
  }
}

export default bookmarkReducer;
