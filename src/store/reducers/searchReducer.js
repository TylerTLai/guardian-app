import { REQUEST_ARTICLES } from '../actions/search';

const initialState = {
  results: [],
  loading: true,
  message: '',
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return {
        ...state,
        results: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}

export default searchReducer;
