import React from "react";
import { shallow } from "enzyme";
import ActionsContainer from "./ActionsContainer";

const mockProps = {
  handleAddToCollectionClick: jest.fn(),
  handleRemoveFromCollectionClick: jest.fn(),
  isInCollection: false,
  handleAddNoteClick: jest.fn()
};

it("ActionsContainer smoke test", () => {
  const wrapper = shallow(<ActionsContainer {...mockProps} />);
  expect(wrapper).toHaveLength(1);
});
