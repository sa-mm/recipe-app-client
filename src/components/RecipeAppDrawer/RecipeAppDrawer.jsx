import React from "react";
import PropTypes from "prop-types";

import { Drawer, MenuItem, Subheader } from "material-ui";

import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";

import { completeGroceryItem } from "../../store/actions";
import GroceryList from "../GroceryList";

const mapState = ({ recipeCollection, groceryList }) => ({
  recipeCollection,
  groceryList
});

const mapDispatch = { completeGroceryItem };

export class RecipeAppDrawer extends React.Component {
  handleItemClick = (recipe, recipeId) => event => {
    const { handleMenuClick, history } = this.props;
    history.push({
      pathname: `/recipe/${recipeId}`,
      state: { recipe }
    });
    handleMenuClick();
  };

  handleGroceryItemCheck = (recipeId, item) => event => {
    this.props.completeGroceryItem(recipeId, item);
  };

  render() {
    const {
      drawerOpen,
      handleMenuClick,
      recipeCollection,
      groceryList
    } = this.props;

    return (
      <Drawer
        open={drawerOpen}
        docked={false}
        onRequestChange={handleMenuClick}
      >
        <GroceryList
          {...{ groceryList }}
          handleGroceryItemCheck={this.handleGroceryItemCheck}
          hasRouteBtn={true}
        />
        <Subheader>Recipe Collection</Subheader>
        {Object.entries(recipeCollection).map(([id, recipe]) => {
          const { label } = recipe;
          return (
            <MenuItem key={id} onClick={this.handleItemClick(recipe, id)}>
              {label}
            </MenuItem>
          );
        })}
      </Drawer>
    );
  }
}

RecipeAppDrawer.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
  recipeCollection: PropTypes.object.isRequired,
  completeGroceryItem: PropTypes.func.isRequired,
  groceryList: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      recipeId: PropTypes.string.isRequired
    })
  ).isRequired
};

export default compose(withRouter, connect(mapState, mapDispatch))(
  RecipeAppDrawer
);
