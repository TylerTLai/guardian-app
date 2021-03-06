export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const GET_BOOKMARKS = 'GET_BOOKMARKS';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';

export const addBookmark = (article) => {
  return {
    type: ADD_BOOKMARK,
    payload: article,
  };
};

export const getBookmarks = () => {
  return {
    type: GET_BOOKMARKS,
  };
};

export const removeBookmark = (articleId) => {
  return {
    type: REMOVE_BOOKMARK,
    payload: articleId,
  };
};
