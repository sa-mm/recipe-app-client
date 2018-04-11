import React from "react";
import PropTypes from "prop-types";
import GroceryList from "./GroceryList";
import { connect } from "react-redux";
import { compose } from "redux";
import { completeGroceryItem } from "../../store/actions";
import { withRouter } from "react-router";

const mapState = ({ groceryList }) => ({ groceryList });
const mapDispatch = { completeGroceryItem };

class GroceryListContainer extends React.Component {
  handleRouteBtnClick = event => {
    this.props.history.push("/list");
  };
  handleGroceryItemCheck = (recipeId, item) => event => {
    this.props.completeGroceryItem(recipeId, item);
  };

  render() {
    const { groceryList, hasRouteBtn } = this.props;
    return (
      groceryList.length > 0 && (
        <GroceryList
          {...{ groceryList, hasRouteBtn }}
          handleRouteBtnClick={this.handleRouteBtnClick}
          handleGroceryItemCheck={this.handleGroceryItemCheck}
        />
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
  hasRouteBtn: PropTypes.bool,
  history: PropTypes.object.isRequired
};

export default compose(withRouter, connect(mapState, mapDispatch))(
  GroceryListContainer
);
