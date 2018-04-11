import React from "react";
import { Route, Switch } from "react-router-dom";

import RecipeSearch from "../RecipeSearch";
import Recipe from "../Recipe";
import Login from "../Login";
import Profile from "../Profile";
import GroceryListRoute from "../GroceryListRoute";

const Main = props => {
  return (
    <Switch>
      <Route exact path="/" component={RecipeSearch} />
      <Route path="/recipe/:recipeId" component={Recipe} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
      <Route path="/list" component={GroceryListRoute} />
    </Switch>
  );
};

export default Main;
