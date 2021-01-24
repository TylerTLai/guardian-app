import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  GET_BOOKMARKS,
} from '../actions/bookmark';

const initialState = {
  bookmarks: [],
  loading: true,
};

function bookmarkReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOKMARK:
      return {
        ...state,
        bookmarks: [action.payload, ...state.bookmarks],
        loading: false,
      };

    case REMOVE_BOOKMARK:
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (bookmark) => bookmark.id !== action.payload
        ),
      };

    case GET_BOOKMARKS:
      return state;

    default:
      return state;
  }
}

export default bookmarkReducer;
