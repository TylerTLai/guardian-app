import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import theme from '../../styles/theme';

const { colors } = theme;

function Search() {
  return (
    <div>
      <AiOutlineSearch size={24} color={`${colors.white}`} />
    </div>
  );
}

export default Search;
