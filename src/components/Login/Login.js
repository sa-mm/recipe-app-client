import React from "react";
import PropTypes from "prop-types";
import { RaisedButton, TextField, Paper } from "material-ui";

const containerStyle = {
  marginTop: "40px",
  display: "flex",
  justifyContent: "center"
};

const loginStyle = {
  padding: "10px",
  width: "300px"
};

const formStyle = {};

const Login = props => {
  const { handleSubmit, handleChange, email, password } = props;
  return (
    <div style={containerStyle}>
      <Paper style={loginStyle}>
        <form onSubmit={handleSubmit} style={formStyle}>
          <label>
            Email:
            <TextField value={email} onChange={handleChange} name="email" />
          </label>
          <label>
            Password:
            <TextField
              value={password}
              type="password"
              onChange={handleChange}
              name="password"
            />
          </label>
          <RaisedButton type="submit" label="Submit" />
        </form>
      </Paper>
    </div>
  );
};

Login.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default Login;
