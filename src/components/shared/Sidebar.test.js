import React from "react";
import Sidebar from "./Sidebar";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });

it("should render snapshot of navbar", () => {
  const component = shallow(<Sidebar />);
  expect(component).toMatchSnapshot();
});
