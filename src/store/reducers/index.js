import { FETCH_ARTICLES } from '../actions/news';

const initialState = {
  pages: null,
  pageSize: null,
  section: '',
  articles: [],
  apiURL: '',
};

function news(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      const { section, results, pages, pageSize } = action.payload.response;

      return {
        ...state,
        pages,
        pageSize,
        section: section.webTitle,
        articles: results,
        apiURL: results.apiURL,
      };

    default:
      return state;
  }
}

export default news;
