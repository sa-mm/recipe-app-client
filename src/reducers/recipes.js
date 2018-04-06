import {
  ADD_INSTRUCTIONS_SUCCESS,
  ADD_INSTRUCTIONS_FAILURE
} from "../actions/addInstructions";

const recipeReducer = (state = {}, action) => {
  const { type, id, recipe, instructions } = action;
  switch (type) {
    case "ADD_RECIPE":
      return { ...state, [id]: recipe };
    case ADD_INSTRUCTIONS_SUCCESS:
      return { ...state, [id]: { ...state[id], instructions } };
    case ADD_INSTRUCTIONS_FAILURE:
      return { ...state };
    default:
      return state;
  }
};

export default recipeReducer;
