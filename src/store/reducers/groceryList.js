import {
  ADD_GROCERY_ITEM,
  REMOVE_GROCERY_ITEM,
  COMPLETE_GROCERY_ITEM
} from "../actions/groceryListActions";

const groceryListReducer = (state = [], action) => {
  const { type, payload = {} } = action;
  const { id, item } = payload;
  switch (type) {
    case ADD_GROCERY_ITEM:
      return [
        ...state,
        { id: item + id, item, recipeId: id, completed: false }
      ];
    case COMPLETE_GROCERY_ITEM:
      return state.map(e => {
        if (e.id === item + id) {
          return {
            ...e,
            completed: !e.completed,
            completedAt: Date()
          };
        }
        return e;
      });
    case REMOVE_GROCERY_ITEM:
      return state.filter(e => e.id !== item + id);
    default:
      return state;
  }
};

export default groceryListReducer;
