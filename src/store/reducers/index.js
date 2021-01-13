import { FETCH_ARTICLES } from '../actions/news';

const initialState = {
  pages: null,
  pageSize: null,
  section: '',
  articles: [],
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
      };

    default:
      return state;
  }
}

export default news;
