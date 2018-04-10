import React from "react";
import PropTypes from "prop-types";

import Actions from "./Actions";

class ActionsContainer extends React.Component {
  render() {
    const {
      handleAddToCollectionClick,
      handleRemoveFromCollectionClick,
      isInCollection,
      handleAddNoteClick
    } = this.props;
    return (
      <Actions
        {...{
          handleAddToCollectionClick,
          handleRemoveFromCollectionClick,
          isInCollection,
          handleAddNoteClick
        }}
      />
    );
  }
}

ActionsContainer.propTypes = {
  handleAddToCollectionClick: PropTypes.func.isRequired,
  handleRemoveFromCollectionClick: PropTypes.func.isRequired,
  isInCollection: PropTypes.bool.isRequired
};

export default ActionsContainer;
