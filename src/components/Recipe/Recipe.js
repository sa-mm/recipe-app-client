import React from "react";
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
    handleAddNoteToRecipe,
    handleDeleteNoteClick,
    handleIngredientCheck,
    recipeId,
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
            {ingredients.map(({ text }, i) => {
              return (
                <ListItem
                  key={text + recipeId}
                  leftCheckbox={
                    <Checkbox
                      onCheck={handleIngredientCheck(text)}
                      checked={checkGroceryList(text + recipeId, groceryList)}
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
              handleAddNoteToRecipe,
              handleDeleteNoteClick
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Recipe;
