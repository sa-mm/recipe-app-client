import React from "react";
import PropTypes from "prop-types";
import "./Recipe.css";
import { Card, CardMedia, CardTitle } from "material-ui/Card";

import { List, ListItem } from "material-ui/List";

import { Paper, Divider, Checkbox, Subheader, FlatButton } from "material-ui";

import Actions from "../Actions";
import RecipeNotes from "./RecipeNotes";

const Recipe = props => {
  const {
    label,
    ingredients,
    handleStepsClick,
    instructions,
    image,
    handleAddToCollectionClick,
    handleRemoveFromCollectionClick,
    isInCollection,
    handleAddNoteClick,
    notes,
    newNote,
    handleNoteChange,
    handleDeleteNoteClick,
    handleIngredientCheck,
    groceryList
  } = props;

  const checkGroceryList = (id, list) => {
    return list.some(e => e.id === id);
  };

  return (
    <div className="Recipe">
      <div className="item">
        <Paper>
          <List>
            <Subheader>Ingredients</Subheader>
            {ingredients.map(({ text, id }, i) => {
              return (
                <ListItem
                  key={id}
                  leftCheckbox={
                    <Checkbox
                      onCheck={handleIngredientCheck(id, text)}
                      checked={checkGroceryList(id, groceryList)}
                    />
                  }
                >
                  {text}
                </ListItem>
              );
            })}
          </List>
          <Divider />
          {instructions ? (
            <List>
              <Subheader>Preparation steps</Subheader>
              {instructions.map((step, i) => {
                return (
                  <ListItem
                    key={`step-${i}`}
                    primaryText={`${i + 1}. ${step}`}
                  />
                );
              })}
            </List>
          ) : (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <FlatButton label="Reveal Steps" onClick={handleStepsClick} />
            </div>
          )}
        </Paper>
      </div>
      <div className="item">
        <Card>
          <CardMedia overlay={<CardTitle title={label} />}>
            <img src={image} alt={label} />
          </CardMedia>
        </Card>
        <Paper>
          <Actions
            {...{
              handleAddToCollectionClick,
              handleRemoveFromCollectionClick,
              isInCollection,
              handleAddNoteClick
            }}
          />
        </Paper>
        {isInCollection && (
          <RecipeNotes
            {...{
              notes,
              newNote,
              handleNoteChange,
              handleDeleteNoteClick
            }}
          />
        )}
      </div>
    </div>
  );
};

Recipe.propTypes = {
  label: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  handleStepsClick: PropTypes.func.isRequired,
  instructions: PropTypes.array,
  image: PropTypes.string.isRequired,
  handleAddToCollectionClick: PropTypes.func.isRequired,
  handleRemoveFromCollectionClick: PropTypes.func.isRequired,
  isInCollection: PropTypes.bool.isRequired,
  handleAddNoteClick: PropTypes.func.isRequired,
  notes: PropTypes.object.isRequired,
  newNote: PropTypes.bool.isRequired,
  handleNoteChange: PropTypes.func.isRequired,
  handleDeleteNoteClick: PropTypes.func.isRequired,
  handleIngredientCheck: PropTypes.func.isRequired,
  recipeId: PropTypes.string.isRequired,
  groceryList: PropTypes.array.isRequired
};

export default Recipe;
