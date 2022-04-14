import React from "react";
import App from "./App";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });

it("should render not found page", () => {
  const component = shallow(<App />);
  const NotFoundPageComp = component.find("NotFoundPage").exists();
  expect(NotFoundPageComp).toBe(true);
});
