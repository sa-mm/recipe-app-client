import React, { Component } from "react";
import Nav from "../Nav";
import Main from "../Main";
import RecipeAppDrawer from "../RecipeAppDrawer";
import Auth from "../../utils/Auth";

import { withRouter } from "react-router";
import { connect } from "react-redux";
import { compose } from "redux";
import { isAuthenticated, auth0Profile } from "../../store/actions";

const mapState = ({ session }) => ({ session });
const mapDispatch = { isAuthenticatedThunk: isAuthenticated, auth0Profile };

class App extends Component {
  state = {
    drawerOpen: false
  };

  componentWillMount() {
    const { isAuthenticatedThunk, auth0Profile } = this.props;
    const auth = new Auth();
    if (auth.isAuthenticated()) {
      isAuthenticatedThunk();
      auth.getProfile((err, profile) => {
        if (err) console.log(err);
        auth0Profile(profile);
      });
    }
  }

  handleMenuClick = event => {
    this.setState(prevState => {
      return {
        drawerOpen: !prevState.drawerOpen
      };
    });
  };

  render() {
    return (
      <div>
        <Nav handleMenuClick={this.handleMenuClick} />

        <RecipeAppDrawer
          drawerOpen={this.state.drawerOpen}
          handleMenuClick={this.handleMenuClick}
        />

        <Main />
      </div>
    );
  }
}

export default compose(withRouter, connect(mapState, mapDispatch))(App);
