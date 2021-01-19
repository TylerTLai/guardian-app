export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';
export const GET_BOOKMARKS = 'GET_BOOKMARKS';

export const addBookmark = (article) => {
  console.log('added')
  return {
    type: ADD_BOOKMARK,
    payload: article,
  };
};

export const removeBookmark = (article) => {
  console.log('removed');
  return {
    type: REMOVE_BOOKMARK,
    payload: article,
  };
};

export const getBookmarks = () => {
  return {
    type: GET_BOOKMARKS,
  };
};
