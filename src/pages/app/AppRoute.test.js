import { shallow } from "enzyme";
import React from "react";
import AppRoute from "./AppRoute";

it("should render snapshot  of approute", () => {
  const component = shallow(<AppRoute />);
  console.log(component.debug());
  expect(component).toMatchSnapshot();
});
