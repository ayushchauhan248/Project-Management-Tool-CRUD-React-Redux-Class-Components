import { shallow } from "enzyme";
import React from "react";
import Navbar from "./Navbar";

it("should render snapshot of navbar", () => {
  const component = shallow(<Navbar />);
  expect(component).toMatchSnapshot();
});
