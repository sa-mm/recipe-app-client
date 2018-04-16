import React from "react";
import PropTypes from "prop-types";
import Recipe from "./Recipe";
import { negroni } from "../../data/mockRecipeWithInstructions";

import { connect } from "react-redux";

import {
  getInstructions,
  addToCollection,
  removeFromCollection,
  addNoteToRecipe,
  changeNoteValue,
  deleteNoteFromRecipe,
  addGroceryItem,
  removeGroceryItem,
  auth0Login,
  persistRecipeList
} from "../../store/actions";

const mapStateToProps = ({
  recipe,
  recipeCollection,
  groceryList,
  session
}) => ({
  recipe,
  recipeCollection,
  groceryList,
  session
});
const mapDispatchToProps = {
  getInstructions,
  addToCollection,
  removeFromCollection,
  addNoteToRecipe,
  changeNoteValue,
  deleteNoteFromRecipe,
  addGroceryItem,
  removeGroceryItem,
  auth0Login,
  persistRecipeList
};

export class RecipeContainer extends React.Component {
  state = {
    recipe: {},
    newNote: false,
    notes: {},
    isInCollection: null
  };

  componentWillMount() {
    this.setRecipe(this.props);
  }

  componentDidMount() {
    // document.title = `Recipe: ${this.state.recipe.label}`;
  }

  componentWillReceiveProps(nextProps) {
    this.setRecipe(nextProps);
  }

  setRecipe(props) {
    const { match, recipeCollection } = props;
    const { recipeId } = match.params;
    let recipe = props.recipe;

    let isInCollection = false;
    if (recipeCollection[recipeId]) {
      recipe = recipeCollection[recipeId];
      isInCollection = true;
    }

    document.title = `Recipe: ${recipe.label}`;

    this.setState({
      recipe,
      isInCollection
    });
  }

  handleStepsClick = (recipeId, recipe) => event => {
    this.props.getInstructions(recipeId, recipe);
  };

  handleAddToCollectionClick = (id, recipe) => event => {
    const {
      session: { isAuthenticated },
      addToCollection,
      auth0Login,
      persistRecipeList
    } = this.props;

    if (isAuthenticated) {
      addToCollection(id, recipe);
      persistRecipeList(id);
    } else {
      auth0Login();
    }
  };

  handleRemoveFromCollectionClick = id => event => {
    this.props.removeFromCollection(id);
  };

  handleAddNoteClick = id => event => {
    this.props.addNoteToRecipe(id);
  };

  handleDeleteNoteClick = recipeId => noteId => event => {
    this.props.deleteNoteFromRecipe(recipeId, noteId);
  };

  handleNoteChange = id => noteId => ({ currentTarget: { value } }) => {
    this.props.changeNoteValue(id, noteId, value);
  };

  handleIngredientCheck = id => (itemId, item) => e => {
    const { currentTarget: { checked } } = e;
    const {
      session: { isAuthenticated },
      addGroceryItem,
      removeGroceryItem,
      auth0Login
    } = this.props;

    if (isAuthenticated) {
      if (checked) {
        addGroceryItem(id, itemId, item);
      } else {
        removeGroceryItem(id, itemId, item);
      }
    } else {
      auth0Login();
    }
  };

  render() {
    const { match, groceryList } = this.props;
    const { newNote, recipe, isInCollection } = this.state;
    const { recipeId } = match.params;

    const {
      label = "",
      ingredients = [],
      url = "",
      instructions = null,
      image = "",
      notes = {}
    } = recipe;

    return (
      <Recipe
        {...{
          label,
          ingredients,
          url,
          instructions,
          image,
          isInCollection,
          notes,
          newNote,
          recipeId,
          groceryList
        }}
        handleStepsClick={this.handleStepsClick(recipeId, recipe)}
        handleAddToCollectionClick={this.handleAddToCollectionClick(
          recipeId,
          recipe
        )}
        handleRemoveFromCollectionClick={this.handleRemoveFromCollectionClick(
          recipeId
        )}
        handleAddNoteClick={this.handleAddNoteClick(recipeId)}
        handleNoteChange={this.handleNoteChange(recipeId)}
        handleDeleteNoteClick={this.handleDeleteNoteClick(recipeId)}
        handleIngredientCheck={this.handleIngredientCheck(recipeId)}
      />
    );
  }
}

RecipeContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      recipeId: PropTypes.string.isRequired
    })
  }),
  recipe: PropTypes.object.isRequired,
  recipeCollection: PropTypes.object.isRequired,
  groceryList: PropTypes.array.isRequired,
  getInstructions: PropTypes.func.isRequired,
  addToCollection: PropTypes.func.isRequired,
  removeFromCollection: PropTypes.func.isRequired,
  addNoteToRecipe: PropTypes.func.isRequired,
  deleteNoteFromRecipe: PropTypes.func.isRequired,
  addGroceryItem: PropTypes.func.isRequired,
  removeGroceryItem: PropTypes.func.isRequired
};

RecipeContainer.defaultProps = {
  match: {
    params: {
      recipeId: "recipe_6bfea91e502d9dd08b97ed55dd2a2f66"
    }
  },
  recipes: {
    recipe_6bfea91e502d9dd08b97ed55dd2a2f66: negroni
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer);
