import React from "react";
import { connect } from "react-redux";

import "./RecipeList.css";

import { Link } from "react-router-dom";

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
          <div key={`recipes-${i}`} className="card">
            <Link
              to={{
                pathname: `recipe/${recipeId}`,
                customProps: recipe
              }}
              onClick={handleRecipeClick(recipeId, recipe)}
            >
              {label}
            </Link>
            <img src={image} alt={label} />
          </div>
        );
      })}
      {more && <button onClick={handleMoreClick}>more recipes</button>}
    </div>
  );
};

export default connect()(RecipeList);
