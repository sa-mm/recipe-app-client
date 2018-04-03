import React from "react";
import Recipe from "./Recipe";

import { getInstructions } from "../../actions";

import { connect } from "react-redux";

const mapStateToProps = ({ recipes }) => ({ recipes });
const mapDispatchToProps = { getInstructions };

class RecipeContainer extends React.Component {
  handleStepsClick = event => {
    const { match, recipes, getInstructions } = this.props;
    const recipe = recipes[match.params.recipeId];
    const { url } = recipe;
    getInstructions(url, match.params.recipeId);
  };

  render() {
    const { match, recipes } = this.props;
    const recipe = recipes[match.params.recipeId] || {};
    const {
      label = "",
      ingredients = [],
      url = "",
      instructions = []
    } = recipe;

    return (
      <Recipe
        {...{ label, ingredients, url, instructions }}
        handleStepsClick={this.handleStepsClick}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer);
