import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

const mockProps = {
  email: "",
  name: "",
  password: "",
  handleChange: jest.fn(),
  handleSubmit: jest.fn()
};

it("Login smoke test", () => {
  const wrapper = shallow(<Login {...mockProps} />);
  expect(wrapper).toHaveLength(1);
});
