import { axiosInstance } from "../../utils/api";

// Action creators
const getSearchResults = (results, meta) => {
  return {
    type: "GET_SEARCH_RESULTS",
    results,
    meta
  };
};

const getMoreSearchResults = (results, meta) => {
  return {
    type: "GET_MORE_SEARCH_RESULTS",
    results,
    meta
  };
};

// Thunks
export const searchRecipe = searchValue => {
  return dispatch => {
    axiosInstance({
      method: "post",
      url: "/api/recipe_search",
      data: {
        q: searchValue
      }
    })
      .then(({ data }) => {
        const { recipes, meta } = extract(data);
        dispatch(getSearchResults(recipes, meta));
      })
      .catch(err => console.log(err));
  };
};

export const additionalRecipes = () => {
  return (dispatch, getStore) => {
    const { search: { meta } } = getStore();
    const { to, q } = meta;
    axiosInstance({
      method: "post",
      url: "/api/recipe_search",
      data: {
        q,
        from: to,
        to: to + 10
      }
    })
      .then(({ data }) => {
        const { recipes, meta } = extract(data);
        dispatch(getMoreSearchResults(recipes, meta));
      })
      .catch(err => console.log(err));
  };
};

function extract(data) {
  const { hits, count, from, more, q, to } = data;
  const meta = { count, from, more, q, to };
  const recipes = hits.map(e => e.recipe);
  return {
    recipes,
    meta
  };
}
