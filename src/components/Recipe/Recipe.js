import React from "react";
import "./Recipe.css";
import { Card, CardMedia, CardTitle } from "material-ui/Card";
const Recipe = props => {
  const { label, ingredients, handleStepsClick, instructions, image } = props;

  return (
    <div className="Recipe">
      <div className="item">
        <div>Ingredients:</div>
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
      <div className="item">
        <Card>
          <CardMedia overlay={<CardTitle title={label} />}>
            <img src={image} alt={label} />
          </CardMedia>
        </Card>
      </div>
    </div>
  );
};

export default Recipe;
