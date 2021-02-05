import { REQUEST_ARTICLES } from '../actions/search';

const initialState = {
  loading: true,
  message: '',
  results: [],
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return {
        ...state,
        loading: false,
        results: action.payload,
      };

    default:
      return state;
  }
}

export default searchReducer;
