import {
  FETCH_ARTICLE,
  FETCH_ARTICLES,
  FETCH_TOP_STORIES,
} from "../actions/articles";

const initialState = {
  pages: null,
  pageSize: null,
  section: "",
  articles: [],
  article: null,
  topStories: [],
  loading: true,
};

function articles(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      const { section, results, pages, pageSize } = action.payload.response;
      return {
        ...state,
        pages,
        pageSize,
        section: section.webTitle,
        articles: results,
        loading: false,
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
        pages: action.payload.response.pages,
        pageSize: action.payload.response.pageSize,
        section: action.payload.response.section.webTitle,
        topStories: action.payload.response.results,
        loading: false,
      };

    default:
      return state;
  }
}

export default articles;
