import React from "react";

const RecipeSearch = props => {
  const { value, handleSubmit, handleChange } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Keywords:
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default RecipeSearch;
