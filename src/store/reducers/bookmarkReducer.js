import {
  ADD_BOOKMARK,
  GET_BOOKMARKS,
  REMOVE_BOOKMARK,
} from "../actions/bookmark";

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

    case GET_BOOKMARKS:
      return state;

    case REMOVE_BOOKMARK:
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (bookmark) => bookmark.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

export default bookmarkReducer;
