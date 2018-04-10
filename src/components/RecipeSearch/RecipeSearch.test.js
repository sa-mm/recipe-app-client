import React from "react";
import { shallow } from "enzyme";
import RecipeSearch from "./RecipeSearch";

const mockProps = {
  value: "",
  handleSubmit: jest.fn(),
  handleChange: jest.fn()
};

it("RecipeSearch smoke test", () => {
  const wrapper = shallow(<RecipeSearch {...mockProps} />);
  expect(wrapper).toHaveLength(1);
});
