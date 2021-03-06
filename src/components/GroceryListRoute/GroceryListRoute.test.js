import React from "react";
import { shallow } from "enzyme";
import { GroceryListRoute } from "./GroceryListRoute";

const mockProps = {
  groceryList: [],
  history: {},
  location: {},
  match: {}
};

it("GroceryListRoute smoke test", () => {
  const wrapper = shallow(<GroceryListRoute {...mockProps} />);
  expect(wrapper).toHaveLength(1);
});
