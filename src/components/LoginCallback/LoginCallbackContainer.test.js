import React from "react";
import { shallow } from "enzyme";
import { LoginCallbackContainer } from "./LoginCallbackContainer";

const mockProps = {
  router: { location: { hash: "", pathname: "", search: "" } }
};

it("LoginCallbackContainer smoke test", () => {
  const wrapper = shallow(<LoginCallbackContainer {...mockProps} />);
  expect(wrapper).toHaveLength(1);
});
