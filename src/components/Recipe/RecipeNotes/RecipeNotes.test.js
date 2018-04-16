import React from "react";
import { shallow } from "enzyme";
import RecipeNotes from "./RecipeNotes";

const mockProps = {
  notes: {},
  newNote: true,
  handleNoteChange: jest.fn(),
  handleAddNoteToRecipe: jest.fn()
};

it("RecipeNotes smoke test", () => {
  const wrapper = shallow(<RecipeNotes {...mockProps} />);
  expect(wrapper).toHaveLength(1);
});
