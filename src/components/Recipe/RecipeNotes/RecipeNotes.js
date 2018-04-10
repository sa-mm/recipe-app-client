import React from "react";
import PropTypes from "prop-types";
import Note from "./Note";
import { Paper } from "material-ui";
import "./RecipeNotes.css";

const RecipeNotes = props => {
  const {
    notes = ["This is a note about the recipe."],
    newNote,
    handleNoteChange,
    handleAddNoteToRecipe,
    handleDeleteNoteClick
  } = props;
  return (
    <Paper>
      <div className="RecipeNotes">
        {notes.map((note, i) => {
          return (
            <Note
              key={i}
              value={note}
              handleNoteChange={handleNoteChange(i)}
              handleAddNoteToRecipe={handleAddNoteToRecipe(i)}
              hasDrag={notes.length > 1}
              handleDeleteNoteClick={handleDeleteNoteClick(i)}
            />
          );
        })}
      </div>
    </Paper>
  );
};

RecipeNotes.propTypes = {
  notes: PropTypes.array.isRequired,
  newNote: PropTypes.bool.isRequired,
  handleNoteChange: PropTypes.func.isRequired,
  handleAddNoteToRecipe: PropTypes.func.isRequired
};

export default RecipeNotes;
