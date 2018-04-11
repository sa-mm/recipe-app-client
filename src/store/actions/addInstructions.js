import { axiosInstance } from "../../utils/api";

import { addInstructionsToCollectionRecipe } from "./index";

export const ADD_INSTRUCTIONS_SUCCESS = "ADD_INSTRUCTIONS_SUCCESS";
export const ADD_INSTRUCTIONS_FAILURE = "ADD_INSTRUCTIONS_FAILURE";

const addInstructions = (recipeId, instructions) => {
  return {
    type: ADD_INSTRUCTIONS_SUCCESS,
    id: recipeId,
    instructions
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

export const getInstructions = (url, recipeId) => {
  return (dispatch, getState) => {
    const { recipeCollection } = getState();
    axiosInstance({
      method: "post",
      url: "/api/recipe_instructions",
      data: {
        q: url
      }
    })
      .then(({ data }) => {
        const { instructions } = data;
        dispatch(addInstructions(recipeId, instructions));

        if (recipeCollection.some(e => e.id === recipeId)) {
          dispatch(addInstructionsToCollectionRecipe(recipeId, instructions));
        }
      })
      .catch(({ response }) => {
        const { status, data: { error } } = response;
        dispatch(addInstructionsFailure(status, error.message));
        console.log(response);
      });
  };
};
