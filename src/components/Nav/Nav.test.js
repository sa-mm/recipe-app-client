import React from "react";
import { shallow } from "enzyme";
import { MyAppBar, MyNavLinks } from "./Nav";

describe("MyApp tests", () => {
  const mockProps = {
    history: {
      push: jest.fn(),
      replace: jest.fn()
    },
    session: {
      isLoggedIn: false
    }
  };
  it("MyAppBar smoke test", () => {
    const wrapper = shallow(<MyAppBar {...mockProps} />);
    expect(wrapper).toHaveLength(1);
  });
});

describe("MyNavLinks tests", () => {
  const mockProps = {
    isLoggedIn: false
  };
  it("MyNavLinks smoke test", () => {
    const wrapper = shallow(<MyNavLinks {...mockProps} />);
    expect(wrapper).toHaveLength(1);
  });
});
