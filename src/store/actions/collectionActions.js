export const ADD_RECIPE_TO_COLLECTION = "ADD_RECIPE_TO_COLLECTION";
export const REMOVE_RECIPE_FROM_COLLECTION = "REMOVE_RECIPE_FROM_COLLECTION";

export const ADD_INSTRUCTIONS_TO_RECIPE = "ADD_INSTRUCTIONS_TO_RECIPE";

export const ADD_NOTE_TO_RECIPE = "ADD_NOTE_TO_RECIPE";
export const DELETE_NOTE_FROM_RECIPE = "DELETE_NOTE_FROM_RECIPE";

export const addToCollection = (id, recipe) => {
  return {
    type: ADD_RECIPE_TO_COLLECTION,
    payload: {
      id,
      recipe
    }
  };
};

export const removeFromCollection = id => {
  return {
    type: REMOVE_RECIPE_FROM_COLLECTION,
    payload: { id }
  };
};

export const addInstructionsToCollectionRecipe = (id, instructions) => {
  return {
    type: ADD_INSTRUCTIONS_TO_RECIPE,
    payload: { id, instructions }
  };
};

export const addNoteToRecipe = (id, idx, note) => {
  return {
    type: ADD_NOTE_TO_RECIPE,
    payload: {
      id,
      idx,
      note
    }
  };
};

export const deleteNoteFromRecipe = (id, idx) => {
  return {
    type: DELETE_NOTE_FROM_RECIPE,
    payload: {
      id,
      idx
    }
  };
};
