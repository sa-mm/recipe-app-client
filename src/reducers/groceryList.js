import {
  ADD_GROCERY_ITEM,
  REMOVE_GROCERY_ITEM
} from "../actions/groceryListActions";

const groceryListReducer = (state = [], action) => {
  const { type, payload = {} } = action;
  const { id, item } = payload;
  switch (type) {
    case ADD_GROCERY_ITEM:
      return [...state, { id: item + id, item, recipeId: id }];
    case REMOVE_GROCERY_ITEM:
      return state.filter(e => e.id !== item + id);
    default:
      return state;
  }
};

export default groceryListReducer;
