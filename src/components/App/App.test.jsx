import React from "react";
import App from "./App";
import { shallow } from "enzyme";

it("App smoke test", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toHaveLength(1);
});
