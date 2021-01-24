import { FETCH_ARTICLE, FETCH_ARTICLES } from '../actions/news';

const initialState = {
  pages: null,
  pageSize: null,
  section: '',
  articles: [],
  article: null,
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

    case FETCH_ARTICLE:
      return {
        ...state,
        article: action.payload,
      };

    default:
      return state;
  }
}

export default news;
