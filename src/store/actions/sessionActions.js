import { axiosInstance } from "../../utils/api";
import { getRecipeList } from "./index";
import { push } from "react-router-redux";
import Auth from "../../utils/Auth";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const AUTH0_LOGIN_STARTED = "AUTH0_LOGIN_STARTED";
export const IS_AUTHENTICATED = "IS_AUTHENTICATED";
export const AUTH0_LOGIN_SUCCESS = "AUTH0_LOGIN_SUCCESS";

export const AUTH0_PROFILE_SUCCESS = "AUTH0_PROFILE_SUCCESS";

const loginSuccess = email => {
  return {
    type: LOGIN_SUCCESS,
    payload: email
  };
};

const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
    payload: {}
  };
};

const auth0ProfileSuccess = profile => {
  return {
    type: AUTH0_PROFILE_SUCCESS,
    payload: profile
  };
};

export const auth0LoginStarted = () => {
  return { type: AUTH0_LOGIN_STARTED, payload: {} };
};

export const isAuthenticated = () => {
  return { type: IS_AUTHENTICATED, payload: {} };
};

export const auth0LoginSuccess = () => {
  return {
    type: AUTH0_LOGIN_SUCCESS,
    payload: {}
  };
};

export const auth0Login = () => {
  return (dispatch, getstate) => {
    dispatch(auth0LoginStarted());

    const auth = new Auth();
    auth.login();
  };
};

export const login = (email, password) => {
  return dispatch => {
    if (email && password) {
      dispatch(loginSuccess(email));
      dispatch(push("/"));
    } else {
      dispatch(loginFailure());
    }
  };
};

export const auth0Profile = profile => {
  return dispatch => {
    dispatch(auth0ProfileSuccess(profile));
    dispatch(persistProfile());
    dispatch(getRecipeList());
  };
};

export const persistProfile = profile => {
  return (dispatch, getState) => {
    const { session } = getState();
    axiosInstance({
      headers: {
        authorization: "Bearer " + localStorage.getItem("access_token")
      },
      method: "post",
      url: "/api/user",
      data: session
    });
  };
};
