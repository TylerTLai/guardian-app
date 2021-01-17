import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  GET_BOOKMARKS,
} from '../actions/bookmark';

const initialState = {
  bookmarks: [],
};

function bookmarkReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOKMARK:
      localStorage.setItem(
        'guardian-bookmark',
        JSON.stringify({
          ...state,
          bookmarks: [...state.bookmarks, action.payload],
        })
      );
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
      };
    case REMOVE_BOOKMARK:
      return state;
    case GET_BOOKMARKS:
      return state;
    default:
      return state;
  }
}

export default bookmarkReducer;
