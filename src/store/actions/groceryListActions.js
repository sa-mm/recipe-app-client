export const ADD_GROCERY_ITEM = "ADD_GROCERY_ITEM";
export const REMOVE_GROCERY_ITEM = "REMOVE_GROCERY_ITEM";
export const COMPLETE_GROCERY_ITEM = "COMPLETE_GROCERY_ITEM";

export const addGroceryItem = (id, item) => {
  return {
    type: ADD_GROCERY_ITEM,
    payload: {
      id,
      item
    }
  };
};

export const completeGroceryItem = (id, item) => {
  return {
    type: COMPLETE_GROCERY_ITEM,
    payload: { id, item }
  };
};

export const removeGroceryItem = (id, item) => {
  return {
    type: REMOVE_GROCERY_ITEM,
    payload: {
      id,
      item
    }
  };
};
