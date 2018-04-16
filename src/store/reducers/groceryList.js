import {
  ADD_GROCERY_ITEM,
  REMOVE_GROCERY_ITEM,
  COMPLETE_GROCERY_ITEM
} from "../actions/groceryListActions";

const groceryListReducer = (state = [], action) => {
  const { type, payload = {} } = action;
  const { recipeId, item, itemId } = payload;
  switch (type) {
    case ADD_GROCERY_ITEM:
      return [...state, { id: itemId, item, recipeId, completed: false }];
    case COMPLETE_GROCERY_ITEM:
      return state.map(e => {
        if (e.id === itemId && e.recipeId === recipeId) {
          return {
            ...e,
            completed: !e.completed,
            completedAt: Date()
          };
        }
        return e;
      });
    case REMOVE_GROCERY_ITEM:
      return state.filter(e => e.id !== itemId && e.recipeId === recipeId);
    default:
      return state;
  }
};

export default groceryListReducer;
