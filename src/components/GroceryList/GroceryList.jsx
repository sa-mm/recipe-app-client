import React from "react";
import PropTypes from "prop-types";

import { Subheader, Checkbox, Divider } from "material-ui";
import { ListItem } from "material-ui/List";

const GroceryList = props => {
  const { groceryList, handleGroceryItemCheck } = props;
  return (
    <div>
      <Subheader>Grocery List</Subheader>
      {groceryList.map(({ item, id, recipeId, completed }) => {
        return (
          <ListItem
            key={id}
            leftCheckbox={
              <Checkbox
                checked={completed}
                onCheck={handleGroceryItemCheck(recipeId, item)}
              />
            }
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {item}
          </ListItem>
        );
      })}
      <Divider />
    </div>
  );
};

GroceryList.propTypes = {
  groceryList: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      recipeId: PropTypes.string.isRequired
    })
  ).isRequired,
  handleGroceryItemCheck: PropTypes.func.isRequired
};

export default GroceryList;
