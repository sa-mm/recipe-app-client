const recipeReducer = (state = {}, action) => {
  const { type, id, recipe, instructions } = action;
  switch (type) {
    case "ADD_RECIPE":
      return { ...state, [id]: recipe };
    case "ADD_INSTRUCTIONS":
      return { ...state, [id]: { ...state[id], instructions } };
    default:
      return state;
  }
};

export default recipeReducer;
