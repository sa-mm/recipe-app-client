import React from "react";
import PropTypes from "prop-types";

import RecipeNotes from "./RecipeNotes";

class RecipeNotesContainer extends React.Component {
  render() {
    const {
      notes,
      newNote,
      handleNoteChange,
      handleDeleteNoteClick
    } = this.props;

    if (Object.keys(notes).length === 0) return null;
    return (
      <RecipeNotes
        {...{
          notes,
          newNote,
          handleNoteChange,
          handleDeleteNoteClick
        }}
      />
    );
  }
}

RecipeNotesContainer.propTypes = {
  notes: PropTypes.object.isRequired,
  newNote: PropTypes.bool.isRequired,
  handleNoteChange: PropTypes.func.isRequired,
  handleDeleteNoteClick: PropTypes.func.isRequired
};

export default RecipeNotesContainer;
