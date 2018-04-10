import React from "react";
import PropTypes from "prop-types";
import Profile from "./Profile";

import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";

const mapState = ({ session }) => ({ session });

class ProfileContainer extends React.Component {
  render() {
    const { session, history } = this.props;
    const { isLoggedIn } = session;

    if (!isLoggedIn) history.push("/login");
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
