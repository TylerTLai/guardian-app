import axios from 'axios';

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';

const API_KEY = process.env.REACT_APP_GUARDIAN_API_KEY;

export const requestArticles = (query) => {
  const searchURL = `https://content.guardianapis.com/search?q=${query}&format=json&show-fields=headline,thumbnail&order-by=relevance&api-key=${API_KEY}`;

  return async (dispatch) => {
    const response = await axios.get(searchURL);

    dispatch({
      type: REQUEST_ARTICLES,
      payload: response.data.response.results,
    });
  };
};
