import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import RecipeSearch from "../RecipeSearch";
import Recipe from "../Recipe";
import Login from "../Login";

const Main = props => {
  return (
    <Switch>
      <Route exact path="/" component={RecipeSearch} />
      <Route path="/recipe/:recipeId" component={Recipe} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default withRouter(Main);
