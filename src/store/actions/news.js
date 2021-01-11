import axios from 'axios';

export const FETCH_NEWS = 'FETCH_NEWS';

const API_KEY = process.env.REACT_APP_GUARDIAN_API_KEY;
const URL = 'https://content.guardianapis.com/technology?api-key=';

export const fetchNews = () => {

  return async (dispatch) => {

    const response = await axios.get(URL + API_KEY);
    console.log(response.data);

    dispatch({
      type: FETCH_NEWS,
      payload: response.data,
    });
  };
  
};
