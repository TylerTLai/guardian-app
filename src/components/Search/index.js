import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { BiSearchAlt2 } from 'react-icons/bi';
import theme from '../../styles/theme';
import axios from 'axios';

import { Container, SearchButton, SearchInput } from './styles';

const { colors } = theme;

function Search() {
  let cancelToken;

  const [searchStatus, setSearchStatus] = useState({
    query: '',
    results: [],
    loading: false,
    message: '',
  });

  useEffect(() => {
    fetchSearchResults(searchStatus.query);
  }, [searchStatus.query, cancelToken]);

  const [active, setActive] = useState(false);

  const handleActiveState = () => {
    setActive((prevState) => !prevState);
  };

  const fetchSearchResults = async (query) => {
    const searchURL = `https://content.guardianapis.com/search?q=${query}&format=json&show-fields=headline,thumbnail&order-by=relevance&api-key=${process.env.REACT_APP_GUARDIAN_API_KEY}`;

    //Check if there are any previous pending requests
    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel('Operation canceled due to new request.');
    }

    //Save the cancel token for the current request
    cancelToken = axios.CancelToken.source();

    try {
      const response = await axios.get(searchURL, {
        cancelToken: cancelToken.token,
      });
      const results = response.data.response.results;
      // console.log(results);
      // setSearchStatus({
      //   ...searchStatus,
      //   results: response.data.response.results,
      //   loading: false,
      // });
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log(error.message);
      }
    }
  };

  const handleInputChange = (event) => {
    const query = event.target.value;

    setSearchStatus({
      ...searchStatus,
      query: query,
      loading: true,
      message: '',
    });
  };

  // console.log('results length ', searchStatus.results.length);

  return (
    <Container active={active}>
      <SearchButton onClick={handleActiveState}>
        <BiSearchAlt2 size={23} color={`${colors.white}`} />
      </SearchButton>
      <SearchInput
        onChange={handleInputChange}
        placeholder="Search all news"
        active={active}
        name="query"
        value={searchStatus.query}
      />
      {/* {searchStatus.results.length > 0 && (
        <Redirect
          to={{
            pathname: '/results',
            state: { results: searchStatus.results },
          }}
        />
      )} */}
    </Container>
  );
}

export default Search;
