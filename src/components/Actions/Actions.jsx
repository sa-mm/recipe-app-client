import React from "react";
import PropTypes from "prop-types";
import "./Actions.css";

import AddCircle from "material-ui/svg-icons/content/add-circle";
import RemoveCircle from "material-ui/svg-icons/content/remove-circle";
import NoteAdd from "material-ui/svg-icons/action/note-add";

import { IconButton } from "material-ui";

const Actions = props => {
  const {
    isInCollection = false,
    handleAddToCollectionClick,
    handleRemoveFromCollectionClick,
    handleAddNoteClick
  } = props;
  return (
    <div className="Actions">
      {isInCollection ? (
        <div>
          <IconButton
            tooltip="Remove recipe from collection"
            onClick={handleRemoveFromCollectionClick}
          >
            <RemoveCircle />
          </IconButton>
          <IconButton tooltip="Add note to recipe" onClick={handleAddNoteClick}>
            <NoteAdd />
          </IconButton>
        </div>
      ) : (
        <IconButton
          tooltip="Add recipe to collection"
          onClick={handleAddToCollectionClick}
        >
          <AddCircle />
        </IconButton>
      )}
    </div>
  );
};

Actions.propTypes = {
  handleAddToCollectionClick: PropTypes.func.isRequired,
  handleRemoveFromCollectionClick: PropTypes.func.isRequired,
  isInCollection: PropTypes.bool.isRequired,
  handleAddNoteClick: PropTypes.func.isRequired
};

export default Actions;
