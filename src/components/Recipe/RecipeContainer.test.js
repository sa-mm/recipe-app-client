import React from "react";
import { shallow } from "enzyme";
import { RecipeContainer } from "./RecipeContainer";

const mockProps = {
  recipe: {},
  recipeCollection: {},
  groceryList: [],
  getInstructions: jest.fn(),
  addToCollection: jest.fn(),
  removeFromCollection: jest.fn(),
  addNoteToRecipe: jest.fn(),
  deleteNoteFromRecipe: jest.fn(),
  addGroceryItem: jest.fn(),
  removeGroceryItem: jest.fn()
};
it("RecipeContainer smoke test", () => {
  const wrapper = shallow(<RecipeContainer {...mockProps} />);
  expect(wrapper).toHaveLength(1);
});
