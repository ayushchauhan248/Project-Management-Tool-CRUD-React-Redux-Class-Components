import { shallow } from "enzyme";
import React from "react";
import Myprofile from "./MyProfile";

it("should render name correct", () => {
  const wrapper = shallow(<Myprofile />);
  const span = wrapper.find("span");
  const res = span.text();

  expect(res).toBe("Ayush Chauhan");
});
