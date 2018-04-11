import React from "react";
import PropTypes from "prop-types";

import { TextField, IconButton } from "material-ui";
import Delete from "material-ui/svg-icons/action/delete";

const Note = props => {
  const { value, handleNoteChange, handleDeleteNoteClick } = props;
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
        tooltip="Delete note"
        onClick={handleDeleteNoteClick}
        disabled={!value}
      >
        <Delete />
      </IconButton>
    </div>
  );
};

Note.propTypes = {
  value: PropTypes.string,
  handleNoteChange: PropTypes.func.isRequired,
  handleDeleteNoteClick: PropTypes.func.isRequired
};

export default Note;
