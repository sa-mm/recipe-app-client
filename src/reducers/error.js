import { ADD_INSTRUCTIONS_FAILURE } from "../actions/addInstructions";

const errorReducer = (state = {}, action) => {
  const { type, payload, meta, error } = action;
  if (error) {
    return {
      ...state,
      type,
      msg: payload.toString(),
      status: meta.status
    };
  }

  return state;
};

export default errorReducer;
