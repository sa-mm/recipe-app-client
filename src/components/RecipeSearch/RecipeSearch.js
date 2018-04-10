import React from "react";
import PropTypes from "prop-types";

import { RaisedButton, TextField } from "material-ui";

import "./RecipeSearch.css";

const RecipeSearch = props => {
  const { value, handleSubmit, handleChange } = props;

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Keywords:{" "}
          <TextField value={value} onChange={handleChange} name="Keywords" />
        </label>
        <RaisedButton className="button" type="submit" label="Search" />
      </form>
    </div>
  );
};

RecipeSearch.propTypes = {
  value: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRquired
};

export default RecipeSearch;
