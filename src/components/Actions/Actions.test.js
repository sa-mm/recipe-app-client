import React from "react";
import { shallow } from "enzyme";
import Actions from "./Actions";

const mockProps = {
  handleAddToCollectionClick: jest.fn(),
  handleRemoveFromCollectionClick: jest.fn(),
  isInCollection: false,
  handleAddNoteClick: jest.fn()
};

it("Actions smoke test", () => {
  const wrapper = shallow(<Actions {...mockProps} />);
  expect(wrapper).toHaveLength(1);
});
