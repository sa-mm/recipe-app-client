export const addRecipe = (recipeId, recipe) => {
  return {
    type: "ADD_RECIPE",
    id: recipeId,
    recipe
  };
};
