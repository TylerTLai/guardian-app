import {
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  GET_BOOKMARKS,
} from '../actions/bookmark';

// const initialState = [
//   {
//     aritcle: '',
//     id: '',
//     bookmarked: false,
//   },
// ];

const initialState = [];

function bookmarkReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOKMARK:
      return [...state, action.payload];
    case REMOVE_BOOKMARK:
      // return {
      //   ...state,
      //   bookmarks: state.bookmarks.filter(bookmark => bookmark !== action.payload)
      // }
      return state;
    case GET_BOOKMARKS:
      return state;
    default:
      return state;
  }
}

export default bookmarkReducer;
