import React from "react";
import Navbar from "./Navbar";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });

it("should render snapshot of navbar", () => {
  const component = shallow(<Navbar />);
  console.log(component);
  expect(component).toMatchSnapshot();
});
