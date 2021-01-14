import React, { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import theme from '../../styles/theme';

import { Container, SearchButton, SearchInput } from './styles';

const { colors } = theme;

function Search() {
  const [active, setActive] = useState(false);

  const handleActiveState = () => {
    setActive((prevState) => !prevState);
  };

  return (
    <Container active={active}>
      <SearchButton onClick={handleActiveState}>
        <BiSearchAlt2 size={23} color={`${colors.white}`} />
      </SearchButton>
      <SearchInput placeholder="Search all news" active={active} />
    </Container>
  );
}

export default Search;
