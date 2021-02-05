import {
  FETCH_ARTICLE,
  FETCH_ARTICLES,
  FETCH_TOP_STORIES,
} from "../actions/articles";

const initialState = {
  article: null,
  articles: [],
  pages: null,
  pageSize: null,
  loading: true,
  section: "",
  topStories: [],
};

function articles(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      const { section, results, pages, pageSize } = action.payload.response;
      return {
        ...state,
        articles: results,
        loading: false,
        pages,
        pageSize,
        section: section.webTitle,
      };

    case FETCH_ARTICLE:
      return {
        ...state,
        article: action.payload,
        loading: false,
      };

    case FETCH_TOP_STORIES:
      return {
        ...state,
        loading: false,
        pages: action.payload.response.pages,
        pageSize: action.payload.response.pageSize,
        section: action.payload.response.section.webTitle,
        topStories: action.payload.response.results,
      };

    default:
      return state;
  }
}

export default articles;
