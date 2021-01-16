export const ADD_BOOKMARK = 'ADD_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';
export const VIEW_BOOKMARK = 'VIEW_BOOKMARK';

export const addBookmark = () => {
  return {
    type: ADD_BOOKMARK,
  };
};

export const removeBookmark = () => {
  return {
    type: REMOVE_BOOKMARK,
  };
};

export const viewBookmark = () => {
  return {
    type: VIEW_BOOKMARK,
  };
};
