import { uniqueId } from "lodash";
import { axiosInstance } from "../../utils/api";

const GET_SEARCH_RESULTS_STARTED = "GET_SEARCH_RESULTS_STARTED";
export const GET_SEARCH_RESULTS_SUCCESS = "GET_SEARCH_RESULTS_SUCCESS";
export const GET_SEARCH_RESULTS_FAILURE = "GET_SEARCH_RESULTS_FAILURE";

// Action creators
const getSearchResults = (results, meta) => {
  return {
    type: GET_SEARCH_RESULTS_SUCCESS,
    results,
    meta
  };
};

// Thunks
export const searchRecipe = searchValue => {
  return dispatch => {
    dispatch({ type: GET_SEARCH_RESULTS_STARTED });
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
      .catch(err => {
        dispatch({ type: GET_SEARCH_RESULTS_FAILURE });
        console.log(err);
      });
  };
};

export const additionalRecipes = () => {
  return (dispatch, getStore) => {
    dispatch({ type: GET_SEARCH_RESULTS_STARTED });

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
        dispatch(getSearchResults(recipes, meta));
      })
      .catch(err => {
        dispatch({ type: GET_SEARCH_RESULTS_FAILURE });
        console.log(err);
      });
  };
};

function extract(data) {
  const { hits, count, from, more, q, to } = data;
  const meta = { count, from, more, q, to };
  const recipes = hits.map(({ recipe }) => {
    const { uri, ingredients } = recipe;
    const index = uri.search("#");
    const recipeId = uri.substring(index + 1);
    return {
      ...recipe,
      ingredients: ingredients.map(e => {
        return {
          ...e,
          id: uniqueId("ingredient_")
        };
      }),
      id: recipeId
    };
  });
  return {
    recipes,
    meta
  };
}
