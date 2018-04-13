import React from "react";
import PropTypes from "prop-types";
import { Paper } from "material-ui";

import GroceryList from "../GroceryList";
import "./GroceryListRoute.css";

export class GroceryListRoute extends React.Component {
  render() {
    return (
      <div className="GroceryListRoute">
        <Paper>
          <GroceryList />
        </Paper>
      </div>
    );
  }
}

GroceryListRoute.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default GroceryListRoute;
