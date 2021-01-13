import axios from 'axios';

export const FETCH_ARTICLES = 'FETCH_ARTICLES';

const API_KEY = process.env.REACT_APP_GUARDIAN_API_KEY;
const URL = 'https://content.guardianapis.com/sport?show-elements=all&api-key=';

export const fetchArticles = () => {
  return async (dispatch) => {
    const response = await axios.get(URL + API_KEY);
    console.log(response.data);
    // console.log(response.data.response.results);

    dispatch({
      type: FETCH_ARTICLES,
      payload: response.data,
    });
  };
};
