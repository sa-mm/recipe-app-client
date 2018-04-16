import React from "react";
import { shallow } from "enzyme";
import RecipeNotesContainer from "./RecipeNotesContainer";

const mockProps = {
  notes: {},
  newNote: true,
  handleNoteChange: jest.fn(),
  handleAddNoteToRecipe: jest.fn(),
  handleDeleteNoteClick: jest.fn()
};
it("RecipeNotes Container smoke test", () => {
  const wrapper = shallow(<RecipeNotesContainer {...mockProps} />);
  expect(wrapper).toHaveLength(1);
});
