import axios from "axios";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

const loginSuccess = email => {
  return {
    type: LOGIN_SUCCESS,
    payload: email
  };
};

const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
    payload: ""
  };
};

export const login = (email, password) => {
  return dispatch => {
    console.log(email);
    dispatch(loginSuccess(email));
    // axios({
    //   method: "post",
    //   url: "/api/recipe_instructions",
    //   data: {
    //     q: url
    //   }
    // }).then(({ data }) => {
    //   const { } = data;
    //   dispatch(loginSuccess());
    // }).catch(err => {
    //   dispatch(loginFailure());
    // })
  };
};