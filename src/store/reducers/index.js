import { FETCH_ARTICLES, FETCH_ARTICLE } from '../actions/news';

const initialState = {
  pages: null,
  pageSize: null,
  section: '',
  articles: [],
  title: '',
  imageSrc: '',
  imageCaption: '',
  imageAlt: '',
};

function news(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      const { section, results, pages, pageSize } = action.payload.response;
      console.log('articles reducer ', action.payload);
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
        title: action.payload.webTitle,
        bodyHtml: action.payload.blocks.body[0].bodyHtml,
        imageSrc: action.payload.blocks.main.elements[0].assets[0].file,
        imageCaption:
          action.payload.blocks.main.elements[0].imageTypeData.caption,
        imageAlt: action.payload.blocks.main.elements[0].imageTypeData.alt,
      };

    default:
      return state;
  }
}

export default news;
