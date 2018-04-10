import React from "react";
import PropTypes from "prop-types";
import Recipe from "./Recipe";

import {
  getInstructions,
  addToCollection,
  removeFromCollection,
  addNoteToRecipe,
  deleteNoteFromRecipe,
  addGroceryItem,
  removeGroceryItem
} from "../../actions";

import { connect } from "react-redux";

import { negroni } from "../../data/mockRecipeWithInstructions";
const mapStateToProps = ({ recipes, recipeCollection, groceryList }) => ({
  recipes,
  recipeCollection,
  groceryList
});
const mapDispatchToProps = {
  getInstructions,
  addToCollection,
  removeFromCollection,
  addNoteToRecipe,
  deleteNoteFromRecipe,
  addGroceryItem,
  removeGroceryItem
};

class RecipeContainer extends React.Component {
  state = {
    recipe: {},
    newNote: false,
    notes: [],
    isInCollection: null
  };

  componentWillMount() {
    this.setRecipe(this.props);
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
    if (recipeCollection.some(recipe => recipe.id === recipeId)) {
      const item = recipeCollection.find(e => e.id === recipeId);
      recipe = item.recipe;
      notes = item.notes || [];
      isInCollection = true;
    } else {
      recipe = recipes[recipeId] || negroni;
    }

    this.setState({
      recipe,
      notes,
      isInCollection
    });
  }

  handleStepsClick = event => {
    const { match, recipes, getInstructions } = this.props;
    const { recipeId } = match.params;
    const recipe = recipes[recipeId];
    const { url } = recipe;
    getInstructions(url, recipeId);
  };

  handleAddToCollectionClick = (id, recipe) => event => {
    this.props.addToCollection(id, recipe);
  };

  handleRemoveFromCollectionClick = id => event => {
    this.props.removeFromCollection(id);
  };

  handleAddNoteToRecipe = recipeId => idx => value => e => {
    // const { currentTarget: { value } } = e;
    this.props.addNoteToRecipe(recipeId, idx, value);
  };

  handleAddNoteClick = id => event => {
    this.setState(prevState => {
      return {
        newNote: true,
        notes: [...prevState.notes, undefined]
      };
    });
  };

  handleDeleteNoteClick = recipeId => idx => event => {
    this.setState(prevState => {
      return {
        notes: prevState.notes.filter((e, i) => i !== idx)
      };
    }, this.deleteNoteFromRecipe(recipeId, idx));
  };

  deleteNoteFromRecipe = (recipeId, idx) => {
    const { recipeCollection } = this.props;
    if (recipeCollection.some(recipe => recipe.id === recipeId)) {
      this.props.deleteNoteFromRecipe(recipeId, idx);
    }
  };

  handleNoteChange = idx => ({ currentTarget: { value } }) => {
    this.setState(prevState => {
      const { notes } = prevState;
      notes[idx] = value;
      return {
        notes: [...notes]
      };
    });
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
        handleNoteChange={this.handleNoteChange}
        handleAddNoteToRecipe={this.handleAddNoteToRecipe(recipeId)}
        handleDeleteNoteClick={this.handleDeleteNoteClick(recipeId)}
        handleIngredientCheck={this.handleIngredientCheck(recipeId)}
      />
    );
  }
}

RecipeContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer);
