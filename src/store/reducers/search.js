const initialState = { results: [], meta: {} };

const searchReducer = (state = initialState, action) => {
  const { type, results, meta } = action;
  switch (type) {
    case "GET_SEARCH_RESULTS":
      return {
        ...state,
        results,
        meta
      };
    case "GET_MORE_SEARCH_RESULTS":
      return {
        ...state,
        results: state.results.concat(results),
        meta
      };
    default:
      return state;
  }
};

export default searchReducer;
