import axios from "axios";

const addInstructions = (recipeId, instructions) => {
  return {
    type: "ADD_INSTRUCTIONS",
    id: recipeId,
    instructions
  };
};

export const getInstructions = (url, recipeId) => {
  return dispatch => {
    axios({
      method: "post",
      url: "/api/recipe_instructions",
      data: {
        q: url
      }
    }).then(({ data }) => {
      const { instructions } = data;
      dispatch(addInstructions(recipeId, instructions));
    });
  };
};
