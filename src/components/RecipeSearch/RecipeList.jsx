import React from "react";
import PropTypes from "prop-types";

import { Card, CardMedia, CardTitle, CardText } from "material-ui/Card";
import "./RecipeList.css";

const RecipeList = props => {
  const { results, meta, handleRecipeClick, handleMoreClick } = props;
  const { more } = meta;
  return (
    <div className="RecipeList">
      {results.map((recipe, i) => {
        const { label, image, uri } = recipe;
        const index = uri.search("#");
        const recipeId = uri.substring(index + 1);
        return (
          <Card
            key={`recipes-${i}`}
            className="card"
            onClick={handleRecipeClick(recipeId, recipe)}
          >
            <CardMedia overlay={<CardTitle title={label} />}>
              <img src={image} alt={label} />
            </CardMedia>
          </Card>
        );
      })}
      {more && (
        <Card className="card more" onClick={handleMoreClick}>
          <CardText>more recipes…</CardText>
        </Card>
      )}
    </div>
  );
};

RecipeList.propTypes = {
  results: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
  handleRecipeClick: PropTypes.func.isRequired,
  handleMoreClick: PropTypes.func.isRequired
};

export default RecipeList;
