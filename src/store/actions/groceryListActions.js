export const ADD_GROCERY_ITEM = "ADD_GROCERY_ITEM";
export const REMOVE_GROCERY_ITEM = "REMOVE_GROCERY_ITEM";
export const COMPLETE_GROCERY_ITEM = "COMPLETE_GROCERY_ITEM";

export const addGroceryItem = (recipeId, itemId, item) => {
  return {
    type: ADD_GROCERY_ITEM,
    payload: {
      recipeId,
      itemId,
      item
    }
  };
};

export const completeGroceryItem = (recipeId, itemId, item) => {
  return {
    type: COMPLETE_GROCERY_ITEM,
    payload: { recipeId, itemId, item }
  };
};

export const removeGroceryItem = (recipeId, itemId, item) => {
  return {
    type: REMOVE_GROCERY_ITEM,
    payload: {
      recipeId,
      itemId,
      item
    }
  };
};
