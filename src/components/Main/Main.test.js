import React from "react";
import { shallow } from "enzyme";
import Main from "./Main";

it("Main smoke test", () => {
  const wrapper = shallow(<Main />);
  expect(wrapper).toHaveLength(1);
});
