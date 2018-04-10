import {
  ADD_RECIPE_TO_COLLECTION,
  REMOVE_RECIPE_FROM_COLLECTION,
  ADD_INSTRUCTIONS_TO_RECIPE,
  ADD_NOTE_TO_RECIPE,
  DELETE_NOTE_FROM_RECIPE
} from "../actions/collectionActions";

const recipeCollectionReducer = (state = [], action) => {
  const { type, payload = {} } = action;
  const { id, recipe, instructions, idx, note } = payload;
  switch (type) {
    case ADD_RECIPE_TO_COLLECTION:
      return [...state, { id, recipe }];
    case REMOVE_RECIPE_FROM_COLLECTION:
      return state.filter(e => e.id !== id);
    case ADD_INSTRUCTIONS_TO_RECIPE:
      return state.map(recipe => {
        if (recipe.id === id) return { ...recipe, instructions };
        return recipe;
      });
    case ADD_NOTE_TO_RECIPE:
      return state.map(recipe => {
        const { notes = [] } = recipe;
        notes[idx] = note;
        if (recipe.id === id) return { ...recipe, notes };
        return recipe;
      });
    case DELETE_NOTE_FROM_RECIPE:
      return state.map(e => {
        if (e.id === id) {
          return {
            ...e,
            notes: e.notes.filter((e, i) => i !== idx)
          };
        }
        return e;
      });
    default:
      return state;
  }
};

export default recipeCollectionReducer;
