import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  GET_BOOKMARKS,
} from '../actions/bookmark';

const initialState = {
  bookmarks: [
    {
      article: '',
      id: '',
      bookmarked: null,
    },
  ],
};

function bookmarkReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOKMARK:
      return {
        ...state,
        bookmarks: [
          ...state.bookmarks,
          {
            article: action.payload.article,
            id: action.payload.id,
            bookmarked: action.payload.bookmarked,
          },
        ],
      };

    case REMOVE_BOOKMARK:
      // return {
      //   ...state,
      //   bookmarks: state.bookmarks.filter(bookmark => bookmark !== action.payload)
      // }

      return state;

    case GET_BOOKMARKS:
      return { ...state };
      
    default:
      return state;
  }
}

export default bookmarkReducer;
