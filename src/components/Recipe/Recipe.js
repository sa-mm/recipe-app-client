import React from "react";

const Recipe = props => {
  const { label, ingredients, handleStepsClick, instructions } = props;

  return (
    <div>
      <h3>{label}</h3>
      <ul>
        {ingredients.map(({ text }, i) => {
          return <li key={`ingredient-${i}`}>{text}</li>;
        })}
      </ul>
      If you want to see the prepartion steps, please click{" "}
      <button onClick={handleStepsClick}>here</button>.
      <ol>
        {instructions.map((step, i) => {
          return <li key={`step-${i}`}>{step}</li>;
        })}
      </ol>
    </div>
  );
};

export default Recipe;
