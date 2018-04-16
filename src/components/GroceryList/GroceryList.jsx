import React from "react";
import PropTypes from "prop-types";

import { Subheader, Checkbox, Divider, IconButton } from "material-ui";
import { List, ListItem } from "material-ui/List";
import ArrowForward from "material-ui/svg-icons/navigation/arrow-forward";

import "./GroceryList.css";

const smallIcon = {
  width: "16px",
  height: "16px"
};

const buttonStyle = {
  width: "20px",
  height: "20px",
  padding: "0px"
};

const GroceryList = props => {
  const {
    groceryList,
    handleGroceryItemCheck,
    hasRouteBtn,
    handleRouteBtnClick
  } = props;
  return (
    <div>
      <List className="GroceryList">
        <Subheader>
          Grocery List{" "}
          {hasRouteBtn && (
            <IconButton
              iconStyle={smallIcon}
              style={buttonStyle}
              onClick={handleRouteBtnClick}
            >
              <ArrowForward />
            </IconButton>
          )}
        </Subheader>
        {groceryList.map(({ item, id, recipeId, completed }) => {
          return (
            <ListItem
              key={id}
              leftCheckbox={
                <Checkbox
                  checked={completed}
                  onCheck={handleGroceryItemCheck(recipeId, id, item)}
                />
              }
              style={{ textDecoration: completed ? "line-through" : "none" }}
            >
              {item}
            </ListItem>
          );
        })}
      </List>
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
  handleGroceryItemCheck: PropTypes.func.isRequired,
  hasRouteBtn: PropTypes.bool,
  handleRouteBtnClick: PropTypes.func.isRequired
};

export default GroceryList;
