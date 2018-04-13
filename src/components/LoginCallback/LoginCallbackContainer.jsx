import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Auth from "../../utils/Auth";

const mapState = ({ router }) => ({ router });

export class LoginCallbackContainer extends React.Component {
  componentWillMount = () => {
    const { hash } = this.props.history.location;
    const auth = new Auth();
    if (/access_token|id_token|error/.test(hash)) {
      auth.handleAuthentication();
    }
  };
  render() {
    return <div>LoginCallbackContainer</div>;
  }
}

LoginCallbackContainer.propTypes = {
  history: PropTypes.object.isRequired
};

export default connect(mapState)(LoginCallbackContainer);
