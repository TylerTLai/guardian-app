import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { BiSearchAlt2 } from 'react-icons/bi';

import { requestArticles } from '../../store/actions/search';
import { Container, SearchButton, SearchInput } from './styles';
import theme from '../../styles/theme';

const { colors } = theme;

function Search({ searchResponse, requestArticles }) {
  const [activeAnimation, setActiveAnimation] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleActiveAnimation = () => {
    setActiveAnimation((prevState) => !prevState);
  };

  const handleInputChange = (event) => {
    setSearchQuery(() => event.target.value);
    requestArticles(searchQuery);
  };

  return (
    <Container active={activeAnimation}>
      <SearchButton onClick={handleActiveAnimation}>
        <BiSearchAlt2 size={23} color={`${colors.white}`} />
      </SearchButton>
      <SearchInput
        minLength={3}
        debounceTimeout={1000}
        onChange={handleInputChange}
        placeholder="Search all news"
        active={activeAnimation}
        autoComplete="off"
        name="query"
        value={searchQuery}
      />

      {searchQuery && searchResponse.results.length > 0 && (
        <Redirect
          to={{
            pathname: '/results',
            state: { results: searchResponse.results },
          }}
        />
      )}
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    searchResponse: state.searchReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestArticles: (query) => dispatch(requestArticles(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
