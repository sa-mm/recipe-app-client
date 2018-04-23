import React from "react";
import { Route, Switch } from "react-router-dom";

import RecipeSearch from "../RecipeSearch";
import Recipe from "../Recipe";
import Login from "../Login";
import LoginCallback from "../LoginCallback";
import Profile from "../Profile";
import GroceryListRoute from "../GroceryListRoute";
import RecipeCollection from "../RecipeCollection";
const Main = props => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={RecipeSearch} />
        <Route path="/recipe/:recipeId" component={Recipe} />
        <Route path="/login" component={Login} />
        <Route path="/login_cb" component={LoginCallback} />
        <Route path="/profile" component={Profile} />
        <Route path="/list" component={GroceryListRoute} />
        <Route path="/collection" component={RecipeCollection} />
      </Switch>
    </main>
  );
};

export default Main;
