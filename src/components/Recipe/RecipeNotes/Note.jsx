import React from "react";
import PropTypes from "prop-types";

import { TextField, IconButton } from "material-ui";
import Save from "material-ui/svg-icons/content/save";
import Delete from "material-ui/svg-icons/action/delete";

const Note = props => {
  const {
    value,
    handleNoteChange,
    handleAddNoteToRecipe,
    handleDeleteNoteClick
  } = props;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        width: "100%",
        marginLeft: "15px"
      }}
    >
      <div style={{ alignSelf: "center" }} />
      <TextField
        fullWidth
        hintText="Add your note here."
        multiLine={true}
        rows={1}
        rowsMax={8}
        value={value}
        onChange={handleNoteChange}
      />
      <IconButton
        tooltip="Save note"
        onClick={handleAddNoteToRecipe(value)}
        disabled={value ? false : true}
      >
        <Save />
      </IconButton>
      <IconButton tooltip="Delete note" onClick={handleDeleteNoteClick}>
        <Delete />
      </IconButton>
    </div>
  );
};

Note.propTypes = {
  value: PropTypes.string,
  handleNoteChange: PropTypes.func.isRequired,
  handleAddNoteToRecipe: PropTypes.func.isRequired,
  handleDeleteNoteClick: PropTypes.func.isRequired
};

export default Note;
