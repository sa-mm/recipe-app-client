import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Login from "./Login";
import { login } from "../../actions/login";

const mapStateToProps = ({ session }) => ({ session });
const mapDispatchToProps = { login };
class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: props.session.email, password: "" };
  }
  handleChange = type => e => {
    this.setState({
      [type]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.login(email, password);
  };
  render() {
    const { email, password } = this.state;
    return (
      <Login
        {...{ email, password }}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

LoginContainer.propTypes = {
  login: PropTypes.func.isRequired,
  session: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
