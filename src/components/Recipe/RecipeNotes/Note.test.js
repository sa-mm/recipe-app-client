import React from "react";
import { shallow } from "enzyme";
import Note from "./Note";

const mockProps = {
  value: "",
  handleNoteChange: jest.fn(),
  handleAddNoteToRecipe: jest.fn(),
  hasDrag: false,
  handleDeleteNoteClick: jest.fn()
};

it("Note smoke test", () => {
  const wrapper = shallow(<Note {...mockProps} />);
  expect(wrapper).toHaveLength(1);
});
