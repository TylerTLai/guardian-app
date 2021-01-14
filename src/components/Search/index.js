import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import theme from '../../styles/theme';

import { Container, SearchButton, SearchInput } from './styles';

const { colors } = theme;

function Search() {
  return (
    <Container>
      {/* <SearchButton>
        <AiOutlineSearch size={20} color={`${colors.white}`} />
      </SearchButton> */}
      <SearchInput placeholder="Search all news" />
    </Container>
  );
}

export default Search;
