import React from "react";
import { shallow } from "enzyme";
import GroceryList from "./GroceryList";

const mockProps = {
  groceryList: [],
  handleGroceryItemCheck: jest.fn()
};

it("GroceryList smoke test", () => {
  const wrapper = shallow(<GroceryList {...mockProps} />);
  expect(wrapper).toHaveLength(1);
});
