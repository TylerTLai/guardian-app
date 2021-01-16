import axios from 'axios';

export const FETCH_TOP_ARTICLES = 'FETCH_ARTICLES';
export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const FETCH_ARTICLE = 'FETCH_ARTICLE';

const API_KEY = process.env.REACT_APP_GUARDIAN_API_KEY;

export const fetchArticles = (section) => {
  const URL = `https://content.guardianapis.com/${section}?show-elements=image&show-fields=all&show-blocks=all&api-key=`;

  return async (dispatch) => {
    const response = await axios.get(URL + API_KEY);
    // console.log('articles ', response.data);
    // console.log(response.data.response.results);

    dispatch({
      type: FETCH_ARTICLES,
      payload: response.data,
    });
  };
};

export const fetchArticle = (articleId) => {
  const URL = `https://content.guardianapis.com${articleId}?show-elements=all&show-blocks=all&show-fields=all&api-key=`;

  return async (dispatch) => {
    const response = await axios.get(URL + API_KEY);

    dispatch({
      type: FETCH_ARTICLE,
      payload: response.data.response.content,
    });
  };
};
