import React from "react";
import { shallow } from "enzyme";
import { LoginContainer } from "./LoginContainer";

const mockProps = {
  login: jest.fn(),
  history: {
    push: jest.fn(),
    replace: jest.fn()
  },
  session: {
    isLoggedIn: false,
    email: "",
    name: ""
  }
};

it("LoginContainer smoke test", () => {
  const wrapper = shallow(<LoginContainer {...mockProps} />);
  expect(wrapper.length).toBe(1);
});
