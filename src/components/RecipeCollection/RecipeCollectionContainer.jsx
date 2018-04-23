import React from "react";
import PropTypes from "prop-types";
import RecipeCollection from "./RecipeCollection";
import { connect } from "react-redux";
import { removeFromCollection, addRecipe } from "../../store/actions";

const mapState = ({ recipeCollection }) => ({
  recipeCollection
});

const mapDispatch = dispatch => {
  return {
    handleRemoveRecipe: (recipeId, recipe) => event => {
      dispatch(removeFromCollection(recipeId));
    },
    handleRecipeClick: (recipeId, recipe) => {
      dispatch(addRecipe(recipeId, recipe));
    }
  };
};

class RecipeCollectionContainer extends React.Component {
  componentWillMount() {
    const { recipeCollection } = this.props;
    this.redirectToHome(recipeCollection);
  }

  componentWillReceiveProps(nextProps) {
    const { recipeCollection } = nextProps;
    this.redirectToHome(recipeCollection);
  }

  redirectToHome = collection => {
    if (collection.length === 0) this.props.history.push("/");
  };

  handleRecipeClickWithPush = (recipeId, recipe) => event => {
    this.props.handleRecipeClick(recipeId, recipe);
    this.props.history.push({
      pathname: `/recipe/${recipeId}`,
      state: { recipe }
    });
  };

  render() {
    const { recipeCollection, handleRemoveRecipe } = this.props;
    return (
      <RecipeCollection
        {...{ recipeCollection, handleRemoveRecipe }}
        handleRecipeClick={this.handleRecipeClickWithPush}
      />
    );
  }
}

RecipeCollectionContainer.propTypes = {
  recipeCollection: PropTypes.object.isRequired
};

export default connect(mapState, mapDispatch)(RecipeCollectionContainer);
