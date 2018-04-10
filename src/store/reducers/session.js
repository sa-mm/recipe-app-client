import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/login";

const initialState = { email: "", name: "", isLoggedIn: false };

const sessionReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        email: payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
};

export default sessionReducer;
