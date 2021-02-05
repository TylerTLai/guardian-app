import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { requestArticles } from "../../store/actions/search";

import { Container, SearchButton, SearchInput } from "./styles";
import theme from "../../styles/theme";

const { colors } = theme;

function Search({ display, requestArticles, searchResponse }) {

  const [activeAnimation, setActiveAnimation] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleActiveAnimation = () => {
    setActiveAnimation((prevState) => !prevState);
  };

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    requestArticles(query);
  };

  return (
    <Container active={activeAnimation} display={display}>
      <SearchButton onClick={handleActiveAnimation}>
        <BiSearchAlt2 size={23} color={`${colors.white}`} />
      </SearchButton>
      <SearchInput
        active={activeAnimation ? 1 : 0}
        autoComplete="off"
        debounceTimeout={800}
        inputRef={(input) => input && input.focus()}
        minLength={3}
        name="query"
        onBlur={() => setActiveAnimation(false)}
        onChange={handleInputChange}
        placeholder="Search all news"
        value={searchQuery}
      />

      {searchQuery && searchResponse.results.length > 0 && (
        <Redirect
          to={{
            pathname: "/results",
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
