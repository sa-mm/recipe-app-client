import {
  ADD_RECIPE_TO_COLLECTION,
  REMOVE_RECIPE_FROM_COLLECTION,
  ADD_INSTRUCTIONS_TO_RECIPE,
  ADD_NOTE_TO_RECIPE,
  CHANGE_NOTE_VALUE,
  DELETE_NOTE_FROM_RECIPE,
  GET_RECIPE_SUCCESS
} from "../actions/collectionActions";

const recipeCollectionReducer = (state = {}, action) => {
  const { type, payload = {} } = action;
  const { id, recipe, instructions, noteId, text = "", list } = payload;
  switch (type) {
    case GET_RECIPE_SUCCESS:
      return list;
    case ADD_RECIPE_TO_COLLECTION:
      return { ...state, [id]: recipe };
    case REMOVE_RECIPE_FROM_COLLECTION: {
      const { [id]: deletedKey, ...rest } = state;
      return { ...rest };
    }
    case ADD_INSTRUCTIONS_TO_RECIPE:
      return {
        ...state,
        [id]: {
          ...state[id],
          instructions
        }
      };
    case ADD_NOTE_TO_RECIPE: {
      const { notes = {} } = state[id];
      notes[noteId] = text;
      return {
        ...state,
        [id]: {
          ...state[id],
          notes: { ...notes }
        }
      };
    }
    case CHANGE_NOTE_VALUE: {
      const { notes = {} } = state[id];
      notes[noteId] = text;
      return {
        ...state,
        [id]: {
          ...state[id],
          notes: { ...notes }
        }
      };
    }
    case DELETE_NOTE_FROM_RECIPE: {
      const { notes = {} } = state[id];
      const { [noteId]: noteToDelete, ...rest } = notes;
      return {
        ...state,
        [id]: {
          ...state[id],
          notes: { ...rest }
        }
      };
    }
    default:
      return state;
  }
};

export default recipeCollectionReducer;
