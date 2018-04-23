import React from "react";
import PropTypes from "prop-types";
import { IconButton } from "material-ui";
import { Card, CardMedia, CardTitle, CardActions } from "material-ui/Card";
import Delete from "material-ui/svg-icons/action/delete";
import "./RecipeCollection.css";

const RecipeCollection = props => {
  const { recipeCollection, handleRemoveRecipe, handleRecipeClick } = props;
  return (
    <div className="RecipeCollection">
      {Object.entries(recipeCollection).map(([id, recipe]) => {
        const { label, image } = recipe;
        return (
          <Card
            key={id}
            className="card"
            onClick={handleRecipeClick(id, recipe)}
          >
            <CardMedia overlay={<CardTitle title={label} />}>
              <img src={image} alt={label} />
            </CardMedia>
            <CardActions
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <IconButton onClick={handleRemoveRecipe(id, recipe)}>
                <Delete />
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

RecipeCollection.propTypes = {
  recipeCollection: PropTypes.object.isRequired
};

export default RecipeCollection;
