import { shallow } from "enzyme";
import React from "react";
import Sidebar from "./Sidebar";

it("should render snapshot of navbar", () => {
  const component = shallow(<Sidebar />);
  expect(component).toMatchSnapshot();
});
