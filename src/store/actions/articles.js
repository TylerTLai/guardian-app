import axios from "axios";

export const FETCH_ARTICLE = "FETCH_ARTICLE";
export const FETCH_ARTICLES = "FETCH_ARTICLES";
export const FETCH_TOP_STORIES = "FETCH_TOP_STORIES";
export const SORT_ARTICLES = "SORT_ARTICLES";

const API_KEY = process.env.REACT_APP_GUARDIAN_API_KEY;

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

export const fetchArticles = (section) => {
  const URL = `https://content.guardianapis.com/${section}?show-elements=image&show-fields=all&show-blocks=all&api-key=`;

  return async (dispatch) => {
    const response = await axios.get(URL + API_KEY);

    dispatch({
      type: FETCH_ARTICLES,
      payload: response.data,
    });
  };
};

export const fetchTopStories = (section, sortValue) => {
  const sortSelect = sortValue === undefined ? "newest" : sortValue;
  console.log("from fetchtopstories action ", sortSelect);
  const URL = `https://content.guardianapis.com/${section}?show-elements=image&show-fields=all&show-blocks=all&order-by=${sortSelect}&api-key=`;

  return async (dispatch) => {
    const response = await axios.get(URL + API_KEY);

    dispatch({
      type: FETCH_TOP_STORIES,
      payload: response.data,
    });
  };
};

export const sortArticles = (sortValue) => {
  return {
    type: SORT_ARTICLES,
    payload: sortValue,
  };
};
