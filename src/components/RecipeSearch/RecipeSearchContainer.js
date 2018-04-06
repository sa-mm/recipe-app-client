import React from "react";
import RecipeSearch from "./RecipeSearch";
import RecipeList from "./RecipeList";

import { connect } from "react-redux";
import { addRecipe, searchRecipe, additionalRecipes } from "../../actions";

import { withRouter } from "react-router";
import { compose } from "redux";

const mapStateToProps = ({ search }) => ({ search });
const mapDispatchToProps = {
  additionalRecipes,
  searchRecipe,
  addRecipe
};

class RecipeSearchContainer extends React.Component {
  state = {
    value: ""
  };

  handleSubmit = event => {
    const { searchRecipe } = this.props;
    const { value } = this.state;
    searchRecipe(value);

    event.preventDefault();
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    event.preventDefault();
  };

  handleRecipeClick = (recipeId, recipe) => event => {
    this.props.addRecipe(recipeId, recipe);
    this.props.history.push({
      pathname: `recipe/${recipeId}`,
      state: { recipe }
    });
  };

  render() {
    const { additionalRecipes, search } = this.props;
    const { results, meta } = search;
    const { value } = this.state;
    return (
      <div>
        <RecipeSearch
          value={value}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <RecipeList
          {...{ results, meta }}
          handleMoreClick={additionalRecipes}
          handleRecipeClick={this.handleRecipeClick}
        />
      </div>
    );
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(RecipeSearchContainer);
