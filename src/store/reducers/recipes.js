import {
  ADD_INSTRUCTIONS_SUCCESS,
  ADD_INSTRUCTIONS_FAILURE
} from "../actions/addInstructions";

import { negroni } from "../../data/mockRecipeWithInstructions";

const initialState = {
  recipe_6bfea91e502d9dd08b97ed55dd2a2f66: negroni
};
const recipeReducer = (state = initialState, action) => {
  const { type, id, recipe, instructions } = action;

  switch (type) {
    case "ADD_RECIPE":
      return { ...state, [id]: recipe };
    case ADD_INSTRUCTIONS_SUCCESS:
      if (state[id]) {
        return { ...state, [id]: { ...state[id], instructions } };
      }
      return { ...state, [id]: { ...recipe, instructions } };
    case ADD_INSTRUCTIONS_FAILURE:
      return { ...state };
    default:
      return state;
  }
};

export default recipeReducer;
