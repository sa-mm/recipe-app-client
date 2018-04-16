import { uniqueId } from "lodash";
import { axiosInstance } from "../../utils/api";

export const ADD_RECIPE_TO_COLLECTION = "ADD_RECIPE_TO_COLLECTION";
export const REMOVE_RECIPE_FROM_COLLECTION = "REMOVE_RECIPE_FROM_COLLECTION";

export const ADD_INSTRUCTIONS_TO_RECIPE = "ADD_INSTRUCTIONS_TO_RECIPE";

export const ADD_NOTE_TO_RECIPE = "ADD_NOTE_TO_RECIPE";
export const CHANGE_NOTE_VALUE = "CHANGE_NOTE_VALUE";
export const DELETE_NOTE_FROM_RECIPE = "DELETE_NOTE_FROM_RECIPE";

export const PERSIST_RECIPE_LIST_STARTED = "PERSIST_RECIPE_LIST_STARTED";
export const PERSIST_RECIPE_LIST_SUCCESS = "PERSIST_RECIPE_LIST_SUCCESS";
export const PERSIST_RECIPE_LIST_FAILURE = "PERSIST_RECIPE_LIST_FAILURE";

export const GET_RECIPE_STARTED = "GET_RECIPE_STARTED";
export const GET_RECIPE_SUCCESS = "GET_RECIPE_SUCCESS";
export const GET_RECIPE_FAILURE = "GET_RECIPE_FAILURE";

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

export const addNoteToRecipe = (id, text) => {
  const noteId = uniqueId();
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

const getRecipeSuccess = list => {
  return {
    type: GET_RECIPE_SUCCESS,
    payload: {
      list
    }
  };
};

//Thunks

export const persistRecipeList = id => {
  return (dispatch, getState) => {
    const { recipeCollection, session: { sub } } = getState();

    dispatch({ type: PERSIST_RECIPE_LIST_STARTED });
    console.log("recipeCollection: ", recipeCollection);
    axiosInstance({
      method: "post",
      headers: {
        authorization: "Bearer " + localStorage.getItem("access_token")
      },
      url: "/api/recipes",
      data: {
        list: recipeCollection,
        sub
      }
    })
      .then(({ data }) => {
        console.log("data: ", data);
        dispatch({ type: PERSIST_RECIPE_LIST_SUCCESS });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: PERSIST_RECIPE_LIST_FAILURE });
        dispatch(deleteNoteFromRecipe(id));
      });
  };
};

export const getRecipeList = () => {
  return (dispatch, getState) => {
    const { sub } = getState().session;
    axiosInstance({
      method: "get",
      headers: {
        authorization: "Bearer " + localStorage.getItem("access_token")
      },
      url: "/api/recipes",
      params: {
        sub
      }
    })
      .then(({ data = {}, status }) => {
        console.log("list data: ", data);
        console.log("status: ", status);
        if (status === 204) {
          dispatch(getRecipeSuccess({}));
        } else {
          dispatch(getRecipeSuccess(data));
        }
      })
      .catch(err => console.log(err));
  };
};

// export const makeAuthorizedCall = () => {
//   return dispatch => {
//     dispatch({ type: "AUTHORIZED_CALL" });
//     axiosInstance({
//       method: "post",
//       headers: {
//         authorization: "Bearer " + localStorage.getItem("access_token")
//       },
//       url: "/api/user",
//       data: {
//         name: "me",
//         email: "me@me.com",
//         sub: "blahblhalb"
//       }
//     })
//       .then(({ data }) => {
//         console.log(data);
//       })
//       .catch(err => console.log(err));
//   };
// };
