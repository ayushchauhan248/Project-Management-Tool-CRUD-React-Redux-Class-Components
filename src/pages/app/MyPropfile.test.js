import React from "react";
import Myprofile from "./MyProfile";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });

describe("My Profile tests", () => {
  it("snapshot testing", () => {
    const component = shallow(<Myprofile />); // it return shallow object
    console.log(component.debug()); // debug will provide us full HTML structure
    expect(component).toMatchSnapshot();
  });

  it("should render name correct", () => {
    const wrapper = shallow(<Myprofile />);
    const span = wrapper.find("#msg-btn");
    const res = span.text();
    expect(res).toBe("Message");
  });

  it("should render designation correct", () => {
    const wrapper = shallow(<Myprofile />);
    const span = wrapper.find("#follow-btn");
    const res = span.text();
    expect(res).toEqual("Follows");
  });
});
