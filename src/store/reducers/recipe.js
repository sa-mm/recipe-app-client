import {
  ADD_RECIPE,
  ADD_INSTRUCTIONS_SUCCESS,
  ADD_INSTRUCTIONS_FAILURE
} from "../actions/recipeActions";

const recipeReducer = (state = {}, action) => {
  const { type, payload = {} } = action;
  const { recipe, id, instructions } = payload;
  switch (type) {
    case ADD_RECIPE:
      return { ...recipe, id };
    case ADD_INSTRUCTIONS_SUCCESS:
      return { ...recipe, id, instructions };
    case ADD_INSTRUCTIONS_FAILURE:
      return { ...state };
    default:
      return state;
  }
};

export default recipeReducer;
