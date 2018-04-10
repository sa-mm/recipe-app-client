import React, { Component } from "react";
import Nav from "../Nav";
import Main from "../Main";
import RecipeAppDrawer from "../RecipeAppDrawer";

class App extends Component {
  state = {
    drawerOpen: false
  };

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

export default App;
