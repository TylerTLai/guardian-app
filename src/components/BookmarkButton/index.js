import React from 'react';
import { BsBookmarkFill } from 'react-icons/bs';

import { Button } from './styles';

function BookmarkButton({ text = 'ADD BOOKMARK', fontSize, handleBookmark }) {
  return (
    <Button fontSize={fontSize} onClick={handleBookmark}>
      <BsBookmarkFill size={16} />
      {text}
    </Button>
  );
}

export default BookmarkButton;
