import { FETCH_ARTICLES, FETCH_ARTICLE } from '../actions/news';

const initialState = {
  bodyHtml: '',
  pages: null,
  pageSize: null,
  section: '',
  articles: [],
  title: '',
  date: '',
  headline: '',
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
      console.log('fetch article ', action.payload);
      return {
        ...state,
        title: action.payload.webTitle,
        bodyHtml: action.payload.blocks.body[0].bodyHtml,
        imageSrc: action.payload.blocks.main.elements[0].assets[0].file,
        imageCaption:
          action.payload.blocks.main.elements[0].imageTypeData.caption,
        imageAlt: action.payload.blocks.main.elements[0].imageTypeData.alt,
        headline: action.payload.fields.headline,
        date: action.payload.webPublicationDate,
      };

    default:
      return state;
  }
}

export default news;
