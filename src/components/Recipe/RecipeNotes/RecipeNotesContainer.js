import React from "react";
import PropTypes from "prop-types";

import RecipeNotes from "./RecipeNotes";

class RecipeNotesContainer extends React.Component {
  render() {
    const {
      notes,
      newNote,
      handleNoteChange,
      handleAddNoteToRecipe,
      handleDeleteNoteClick
    } = this.props;
    return (
      <RecipeNotes
        {...{
          notes,
          newNote,
          handleNoteChange,
          handleAddNoteToRecipe,
          handleDeleteNoteClick
        }}
      />
    );
  }
}

RecipeNotesContainer.propTypes = {
  notes: PropTypes.array.isRequired,
  newNote: PropTypes.bool.isRequired,
  handleNoteChange: PropTypes.func.isRequired,
  handleAddNoteToRecipe: PropTypes.func.isRequired,
  handleDeleteNoteClick: PropTypes.func.isRequired
};

export default RecipeNotesContainer;
