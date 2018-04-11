import React from "react";
import PropTypes from "prop-types";
import Note from "./Note";
import { Paper, Subheader } from "material-ui";
import "./RecipeNotes.css";

const RecipeNotes = props => {
  const { notes, handleNoteChange, handleDeleteNoteClick } = props;

  return (
    <Paper>
      <div className="RecipeNotes">
        <Subheader>Recipe Notes</Subheader>
        {notes.map(({ noteId, text = "" }) => {
          return (
            <Note
              key={noteId}
              value={text}
              handleNoteChange={handleNoteChange(noteId)}
              handleDeleteNoteClick={handleDeleteNoteClick(noteId)}
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
  handleNoteChange: PropTypes.func.isRequired
};

export default RecipeNotes;
