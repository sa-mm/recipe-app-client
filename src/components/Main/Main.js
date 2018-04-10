import React from "react";
import { Route, Switch } from "react-router-dom";

import RecipeSearch from "../RecipeSearch";
import Recipe from "../Recipe";
import Login from "../Login";
import Profile from "../Profile";

const Main = props => {
  return (
    <Switch>
      <Route exact path="/" component={RecipeSearch} />
      <Route path="/recipe/:recipeId" component={Recipe} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
};

export default Main;
