import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { AppBar, ToolbarGroup, FlatButton } from "material-ui";
import { connect } from "react-redux";
import { compose } from "redux";

export const MyNavLinks = ({ isAuthenticated }) => (
  <ToolbarGroup>
    {isAuthenticated ? (
      <FlatButton label="Profile" containerElement={<Link to="/profile" />} />
    ) : (
      <FlatButton label="Login" containerElement={<Link to="/login" />} />
    )}
  </ToolbarGroup>
);

const mapStateToProps = ({ session }) => ({ session });

export class MyAppBar extends React.Component {
  handleTitleClick = () => {
    this.props.history.push("/");
  };

  render() {
    const { session: { isAuthenticated }, handleMenuClick } = this.props;
    return (
      <AppBar
        title="Recipe App"
        onTitleClick={this.handleTitleClick}
        onLeftIconButtonClick={handleMenuClick}
        iconElementRight={<MyNavLinks isAuthenticated={isAuthenticated} />}
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
    isAuthenticated: PropTypes.bool.isRequired
  }).isRequired
};

export default compose(withRouter, connect(mapStateToProps))(MyAppBar);
