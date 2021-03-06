import React from "react";
import PropTypes from "prop-types";
import RecipeSearch from "./RecipeSearch";
import RecipeList from "./RecipeList";

import { connect } from "react-redux";
import {
  addRecipe,
  searchRecipe,
  additionalRecipes
} from "../../store/actions";

const mapStateToProps = ({ search }) => ({ search });
const mapDispatchToProps = {
  additionalRecipes,
  searchRecipe,
  addRecipe
};

export class RecipeSearchContainer extends React.Component {
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
      pathname: `/recipe/${recipeId}`,
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

RecipeSearchContainer.propTypes = {
  search: PropTypes.shape({
    results: PropTypes.array,
    meta: PropTypes.object
  }),
  additionalRecipes: PropTypes.func.isRequired,
  searchRecipe: PropTypes.func.isRequired,
  addRecipe: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(
  RecipeSearchContainer
);
