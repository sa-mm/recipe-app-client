import React from "react";
import { shallow } from "enzyme";
import Recipe from "./Recipe";

const mockProps = {
  label: "",
  ingredients: [],
  handleStepsClick: jest.fn(),
  instructions: [],
  image: "",
  handleAddToCollectionClick: jest.fn(),
  handleRemoveFromCollectionClick: jest.fn(),
  isInCollection: false,
  handleAddNoteClick: jest.fn(),
  notes: {},
  newNote: false,
  handleNoteChange: jest.fn(),
  handleAddNoteToRecipe: jest.fn(),
  handleDeleteNoteClick: jest.fn(),
  handleIngredientCheck: jest.fn(),
  recipeId: "",
  groceryList: []
};
it("Recipe smoke test", () => {
  const wrapper = shallow(<Recipe {...mockProps} />);
  expect(wrapper).toHaveLength(1);
});
