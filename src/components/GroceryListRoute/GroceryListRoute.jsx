import React from "react";
import PropTypes from "prop-types";

import GroceryList from "../GroceryList";
// import { connect } from "react-redux";

// const mapState = ({ groceryList }) => ({ groceryList });

export class GroceryListRoute extends React.Component {
  render() {
    return <GroceryList />;
  }
}

GroceryListRoute.propTypes = {};

export default GroceryListRoute;
