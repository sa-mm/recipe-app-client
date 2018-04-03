import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/login";

const initialState = { email: "", name: "" };

const sessionReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        email: payload
      };
    case LOGIN_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default sessionReducer;
