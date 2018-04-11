import React from "react";
import { shallow } from "enzyme";
import GroceryListContainer from "./GroceryListContainer";

const mockProps = {
  groceryList: [],
  handleGroceryItemCheck: jest.fn()
};

it("GroceryListContainer smoke test", () => {
  const wrapper = shallow(<GroceryListContainer {...mockProps} />);
  expect(wrapper).toHaveLength(1);
});
