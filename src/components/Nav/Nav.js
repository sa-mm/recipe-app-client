import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { AppBar, ToolbarGroup, FlatButton } from "material-ui";
import { connect } from "react-redux";
import { compose } from "redux";

const MyNavLinks = ({ isLoggedIn }) => (
  <ToolbarGroup>
    {isLoggedIn ? (
      <FlatButton label="Profile" containerElement={<Link to="/profile" />} />
    ) : (
      <FlatButton label="Login" containerElement={<Link to="/login" />} />
    )}
  </ToolbarGroup>
);

const mapStateToProps = ({ session }) => ({ session });

class MyAppBar extends React.Component {
  handleTitleClick = () => {
    this.props.history.push("/");
  };

  render() {
    const { session: { isLoggedIn }, handleMenuClick } = this.props;
    return (
      <AppBar
        title="Recipe App"
        onTitleClick={this.handleTitleClick}
        onLeftIconButtonClick={handleMenuClick}
        iconElementRight={<MyNavLinks isLoggedIn={isLoggedIn} />}
      />
    );
  }
}

MyAppBar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired
  }).isRequired,
  session: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired
  }).isRequired
};

export default compose(withRouter, connect(mapStateToProps))(MyAppBar);
