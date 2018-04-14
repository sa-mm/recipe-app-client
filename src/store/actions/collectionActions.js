import { axiosInstance } from "../../utils/api";

export const ADD_RECIPE_TO_COLLECTION = "ADD_RECIPE_TO_COLLECTION";
export const REMOVE_RECIPE_FROM_COLLECTION = "REMOVE_RECIPE_FROM_COLLECTION";

export const ADD_INSTRUCTIONS_TO_RECIPE = "ADD_INSTRUCTIONS_TO_RECIPE";

export const ADD_NOTE_TO_RECIPE = "ADD_NOTE_TO_RECIPE";
export const CHANGE_NOTE_VALUE = "CHANGE_NOTE_VALUE";
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

export const addNoteToRecipe = (id, noteId, text) => {
  return {
    type: ADD_NOTE_TO_RECIPE,
    payload: {
      id,
      noteId,
      text
    }
  };
};

export const changeNoteValue = (id, noteId, text) => {
  return {
    type: CHANGE_NOTE_VALUE,
    payload: {
      id,
      noteId,
      text
    }
  };
};

export const deleteNoteFromRecipe = (id, noteId) => {
  return {
    type: DELETE_NOTE_FROM_RECIPE,
    payload: {
      id,
      noteId
    }
  };
};

export const makeAuthorizedCall = () => {
  return dispatch => {
    dispatch({ type: "AUTHORIZED_CALL" });
    axiosInstance({
      method: "get",
      headers: {
        authorization: "Bearer " + localStorage.getItem("access_token")
      },
      url: "/authorized"
    })
      .then(({ data }) => {
        console.log(data);
      })
      .catch(err => console.log(err));

    //   axiosInstance({
    //     method: "post",
    //     headers: {
    //       authorization: "Bearer " + localStorage.getItem("access_token")
    //     },
    //     url: "/timesheets"
    //   })
    //     .then(({ data }) => console.log(data))
    //     .catch(err => console.log(err));
  };
};
