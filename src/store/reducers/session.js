import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  AUTH0_PROFILE_SUCCESS,
  AUTH0_LOGIN_SUCCESS,
  AUTH0_LOGIN_STARTED
} from "../actions/login";

const initialState = {
  email: "",
  name: "",
  isLoggedIn: false,
  isAuthenticated: false
};

const sessionReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH0_LOGIN_STARTED:
      return state;
    case AUTH0_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      };
    case AUTH0_PROFILE_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        ...payload
      };
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
