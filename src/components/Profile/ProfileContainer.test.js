import React from "react";
import { shallow } from "enzyme";
import { ProfileContainer } from "./ProfileContainer";

const mockProps = {
  session: {
    email: "",
    name: "",
    isLoggedIn: false
  },
  history: {
    push: jest.fn(),
    replace: jest.fn()
  }
};

it("ProfileContainer smoke test", () => {
  const wrapper = shallow(<ProfileContainer {...mockProps} />);
  expect(wrapper).toHaveLength(1);
});
