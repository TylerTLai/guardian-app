import React from 'react';
import { BsBookmarkFill } from 'react-icons/bs';

import { Button } from './styles';

function BookmarkButton({ text = 'ADD BOOKMARK', fontSize }) {
  return (
    <Button fontSize={fontSize}>
      <BsBookmarkFill />
      {text}
    </Button>
  );
}

export default BookmarkButton;
