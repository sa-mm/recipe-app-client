import React from "react";
import PropTypes from "prop-types";
import GroceryList from "./GroceryList";

class GroceryListContainer extends React.Component {
  render() {
    const { groceryList, handleGroceryItemCheck } = this.props;
    return (
      groceryList.length > 0 && (
        <GroceryList {...{ groceryList, handleGroceryItemCheck }} />
      )
    );
  }
}

GroceryListContainer.propTypes = {
  groceryList: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      recipeId: PropTypes.string.isRequired
    })
  ).isRequired,
  handleGroceryItemCheck: PropTypes.func.isRequired
};

export default GroceryListContainer;
