export const ADD_RECIPE = "ADD_RECIPE";

export const addRecipe = (id, recipe) => {
  return {
    type: "ADD_RECIPE",
    payload: {
      id,
      recipe
    }
  };
};
