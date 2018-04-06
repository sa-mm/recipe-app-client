import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Login from "./Login";
import { login } from "../../actions/login";

const mapStateToProps = ({ session }) => ({ session });
const mapDispatchToProps = { login };
class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: props.session.email, password: "" };
  }

  handleChange = ({ currentTarget: { name, value } }) => {
    this.setState({
      [name]: value
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired
  }).isRequired,
  session: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired
  }).isRequired
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(LoginContainer);
