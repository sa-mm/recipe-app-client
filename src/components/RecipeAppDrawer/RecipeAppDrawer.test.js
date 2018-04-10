import React from "react";
import { shallow } from "enzyme";
import { RecipeAppDrawer } from "./RecipeAppDrawer";

const mockProps = {
  drawerOpen: false,
  handleMenuClick: jest.fn(),
  recipeCollection: [],
  completeGroceryItem: jest.fn(),
  groceryList: []
};

it("RecipeAppDrawer smoke test", () => {
  const wrapper = shallow(<RecipeAppDrawer {...mockProps} />);
  expect(wrapper).toHaveLength(1);
});
