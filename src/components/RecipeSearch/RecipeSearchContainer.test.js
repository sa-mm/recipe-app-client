import React from "react";
import { shallow } from "enzyme";
import { RecipeSearchContainer } from "./RecipeSearchContainer";

const mockProps = {
  search: { results: [], meta: {} },
  additionalRecipes: jest.fn(),
  searchRecipe: jest.fn(),
  addRecipe: jest.fn()
};

it("RecipeSearchContainer smoke test", () => {
  const wrapper = shallow(<RecipeSearchContainer {...mockProps} />);
  expect(wrapper).toHaveLength(1);
});
