import React from "react";
import PropTypes from "prop-types";

const Login = props => {
  const { handleSubmit, handleChange, email, password } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="text" value={email} onChange={handleChange("email")} />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handleChange("password")}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

Login.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};
export default Login;
