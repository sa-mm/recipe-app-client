import React from "react";
import { shallow } from "enzyme";
import RecipeList from "./RecipeList";

const mockProps = {
  results: [],
  meta: {},
  handleRecipeClick: jest.fn(),
  handleMoreClick: jest.fn()
};

it("RecipeList smoke test", () => {
  const wrapper = shallow(<RecipeList {...mockProps} />);
  expect(wrapper).toHaveLength(1);
});
