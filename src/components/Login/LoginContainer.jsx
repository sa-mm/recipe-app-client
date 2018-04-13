import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Login from "./Login";
import { login, auth0Profile, auth0Login } from "../../store/actions/";

import Auth from "../../utils/Auth";

const mapStateToProps = ({ session, router }) => ({ session, router });
const mapDispatchToProps = { login, auth0Profile, auth0Login };

export class LoginContainer extends React.Component {
  constructor(props) {
    const { email, name } = props.session;
    super(props);
    this.state = { email, name, password: "" };
  }

  componentWillMount() {
    const auth = new Auth();
    if (auth.isAuthenticated()) {
      this.props.history.push("/profile");
    } else {
      this.props.auth0Login();
    }
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
    const { email, password, name } = this.state;

    return (
      <Login
        {...{ email, password, name }}
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
    isLoggedIn: PropTypes.bool.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
