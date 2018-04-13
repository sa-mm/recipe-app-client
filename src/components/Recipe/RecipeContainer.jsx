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
  auth0Login
} from "../../store/actions";

const mapStateToProps = ({
  recipes,
  recipeCollection,
  groceryList,
  session
}) => ({
  recipes,
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
  auth0Login
};

export class RecipeContainer extends React.Component {
  state = {
    recipe: {},
    newNote: false,
    notes: [],
    isInCollection: null,
    notesCounter: 0
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
    const { match, recipes, recipeCollection } = props;
    const { recipeId } = match.params;

    let recipe;
    let notes = [];
    let isInCollection = false;
    let notesCounter = 0;
    if (recipeCollection.some(recipe => recipe.id === recipeId)) {
      const item = recipeCollection.find(e => e.id === recipeId);
      recipe = item.recipe;
      notes = item.notes || this.state.notes;
      isInCollection = true;
      notesCounter = item.notesCounter;
    } else {
      recipe = recipes[recipeId] || Object.values(recipes)[0];
    }

    this.setState({
      recipe,
      notes,
      isInCollection,
      notesCounter
    });
  }

  cbCheck = () => {
    const { history: { location: { state = {} } } } = this.props;
    if (state.callback) {
      state.callback();
    }
  };

  handleStepsClick = event => {
    const { match, recipes, getInstructions } = this.props;
    const { recipeId } = match.params;
    const recipe = recipes[recipeId];
    const { url } = recipe;
    getInstructions(url, recipeId);
  };

  handleAddToCollectionClick = (id, recipe) => event => {
    const {
      session: { isAuthenticated },
      addToCollection,
      auth0Login
    } = this.props;

    if (isAuthenticated) {
      addToCollection(id, recipe);
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

  handleIngredientCheck = id => item => e => {
    const { currentTarget: { checked } } = e;
    const { addGroceryItem, removeGroceryItem } = this.props;

    if (checked) {
      addGroceryItem(id, item);
    } else {
      removeGroceryItem(id, item);
    }
  };

  render() {
    const { match, groceryList } = this.props;
    const { newNote, notes, recipe, isInCollection } = this.state;
    const { recipeId } = match.params;

    const {
      label = "",
      ingredients = [],
      url = "",
      instructions = null,
      image
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
        handleStepsClick={this.handleStepsClick}
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
  recipes: PropTypes.object.isRequired,
  recipeCollection: PropTypes.array.isRequired,
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
