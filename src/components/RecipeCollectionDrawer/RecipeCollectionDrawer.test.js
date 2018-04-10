import React from "react";
import { shallow } from "enzyme";
import { RecipeCollectionDrawer } from "./RecipeCollectionDrawer";

const mockProps = {
  drawerOpen: false,
  handleMenuClick: jest.fn(),
  recipeCollection: [],
  removeGroceryItem: jest.fn(),
  groceryList: []
};

it("RecipeCollectionDrawer smoke test", () => {
  const wrapper = shallow(<RecipeCollectionDrawer {...mockProps} />);
  expect(wrapper).toHaveLength(1);
});
