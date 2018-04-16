import { axiosInstance } from "../../utils/api";

import { addInstructionsToCollectionRecipe } from "./index";

export const ADD_INSTRUCTIONS_SUCCESS = "ADD_INSTRUCTIONS_SUCCESS";
export const ADD_INSTRUCTIONS_FAILURE = "ADD_INSTRUCTIONS_FAILURE";

const addInstructionsSuccess = (recipeId, instructions, recipe) => {
  return {
    type: ADD_INSTRUCTIONS_SUCCESS,
    payload: {
      id: recipeId,
      instructions,
      recipe
    }
  };
};

const addInstructionsFailure = (status, msg) => {
  return {
    type: ADD_INSTRUCTIONS_FAILURE,
    payload: new Error(msg),
    error: true,
    meta: {
      status
    }
  };
};

export const getInstructions = (recipeId, recipe) => {
  return (dispatch, getState) => {
    const { recipeCollection } = getState();

    axiosInstance({
      method: "post",
      url: "/api/recipe_instructions",
      data: {
        q: recipe.url
      }
    })
      .then(({ data }) => {
        const { instructions } = data;
        dispatch(addInstructionsSuccess(recipeId, instructions, recipe));

        if (recipeCollection[recipeId]) {
          dispatch(addInstructionsToCollectionRecipe(recipeId, instructions));
        }
      })
      .catch(err => {
        if (err.response) {
          const { status, data: { error: { message } } } = err.response;
          dispatch(addInstructionsFailure(status, message));
        }
      });
  };
};
