import { GET_SEARCH_RESULTS_SUCCESS } from "../actions/searchRecipe";

const initialState = { results: [], meta: { q: null, to: null } };

const searchReducer = (state = initialState, action) => {
  const { type, results, meta } = action;
  switch (type) {
    case GET_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        results: [...state.results, ...results],
        meta
      };
    default:
      return state;
  }
};

export default searchReducer;
