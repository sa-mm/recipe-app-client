import React from "react";
import PropTypes from "prop-types";

import { Drawer, MenuItem, Subheader, Divider, Checkbox } from "material-ui";
import { ListItem } from "material-ui/List";

import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";

import { removeGroceryItem } from "../../actions";
const mapState = ({ recipeCollection, groceryList }) => ({
  recipeCollection,
  groceryList
});

const mapDispatch = { removeGroceryItem };

class RecipeCollectionDrawer extends React.Component {
  handleItemClick = (recipe, recipeId) => event => {
    const { handleMenuClick, history } = this.props;
    history.push({
      pathname: `/recipe/${recipeId}`,
      state: { recipe }
    });
    handleMenuClick();
  };

  handleGroceryItemCheck = (recipeId, item) => event => {
    this.props.removeGroceryItem(recipeId, item);
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
        {groceryList.length > 0 && (
          <div>
            <Subheader>Grocery List</Subheader>
            {groceryList.map(({ item, id, recipeId }) => {
              return (
                <ListItem
                  key={id}
                  leftCheckbox={
                    <Checkbox
                      checked
                      onCheck={this.handleGroceryItemCheck(recipeId, item)}
                    />
                  }
                >
                  {item}
                </ListItem>
              );
            })}
            <Divider />
          </div>
        )}
        <Subheader>Recipe Collection</Subheader>
        {recipeCollection.map(({ recipe, id }) => {
          return (
            <MenuItem key={id} onClick={this.handleItemClick(recipe, id)}>
              {recipe.label}
            </MenuItem>
          );
        })}
      </Drawer>
    );
  }
}

RecipeCollectionDrawer.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  handleMenuClick: PropTypes.func.isRequired,
  recipeCollection: PropTypes.arrayOf(
    PropTypes.shape({
      recipe: PropTypes.object.isRequired,
      id: PropTypes.string.isRequired
    })
  ),
  removeGroceryItem: PropTypes.func.isRequired,
  groceryList: PropTypes.array.isRquired
};

export default compose(withRouter, connect(mapState, mapDispatch))(
  RecipeCollectionDrawer
);
