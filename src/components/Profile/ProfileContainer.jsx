import React from "react";
import PropTypes from "prop-types";
import Profile from "./Profile";
import Auth from "../../utils/Auth.js";

import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";

const mapState = ({ session }) => ({ session });

export class ProfileContainer extends React.Component {
  render() {
    const { history } = this.props;
    const auth = new Auth();
    if (!auth.isAuthenticated()) history.push("/login");
    return <Profile />;
  }
}

ProfileContainer.propTypes = {
  session: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
  }),
  history: PropTypes.object.isRequired
};

export default compose(withRouter, connect(mapState))(ProfileContainer);
