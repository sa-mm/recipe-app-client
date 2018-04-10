import React from "react";
import PropTypes from "prop-types";
import Note from "./Note";
import { Paper, Subheader } from "material-ui";
import "./RecipeNotes.css";

const RecipeNotes = props => {
  const {
    notes,
    handleNoteChange,
    handleAddNoteToRecipe,
    handleDeleteNoteClick
  } = props;

  return (
    <Paper>
      <div className="RecipeNotes">
        <Subheader>Recipe Notes</Subheader>
        {notes.map((note, i) => {
          return (
            <Note
              key={i}
              value={note}
              handleNoteChange={handleNoteChange(i)}
              handleAddNoteToRecipe={handleAddNoteToRecipe(i)}
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
