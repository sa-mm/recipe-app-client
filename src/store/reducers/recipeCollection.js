import {
  ADD_RECIPE_TO_COLLECTION,
  REMOVE_RECIPE_FROM_COLLECTION,
  ADD_INSTRUCTIONS_TO_RECIPE,
  ADD_NOTE_TO_RECIPE,
  CHANGE_NOTE_VALUE,
  DELETE_NOTE_FROM_RECIPE,
  GET_RECIPE_SUCCESS
} from "../actions/collectionActions";

const recipeCollectionReducer = (state = [], action) => {
  const { type, payload = {} } = action;
  const { id, recipe, instructions, noteId, text = "", list } = payload;
  switch (type) {
    case GET_RECIPE_SUCCESS:
      return list;
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
      return state.map(item => {
        if (item.id === id) {
          const { notes = [], notesCounter = 0 } = item;
          return {
            ...item,
            notes: [
              ...notes,
              {
                noteId: notesCounter,
                text
              }
            ],
            notesCounter: notesCounter + 1
          };
        }
        return item;
      });
    case CHANGE_NOTE_VALUE:
      return state.map(item => {
        if (item.id === id) {
          const { notes } = item;
          return {
            ...item,
            notes: notes.map(note => {
              if (note.noteId === noteId) return { noteId, text };
              return note;
            })
          };
        }
        return item;
      });
    case DELETE_NOTE_FROM_RECIPE:
      return state.map(item => {
        if (item.id === id && item.notes) {
          return {
            ...item,
            notes: item.notes.filter(e => e.noteId !== noteId)
          };
        }
        return item;
      });
    default:
      return state;
  }
};

export default recipeCollectionReducer;
