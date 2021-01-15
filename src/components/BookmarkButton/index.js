import React from 'react';
import { BsBookmarkFill } from 'react-icons/bs';

import { Button } from './styles';

function BookmarkButton({ text = 'ADD BOOKMARK' }) {
  return (
    <Button>
      <BsBookmarkFill />
      {text}
    </Button>
  );
}

export default BookmarkButton;
