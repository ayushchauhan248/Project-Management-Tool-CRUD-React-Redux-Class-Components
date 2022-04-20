import React from "react";
import ProjectCard from "./ProjectCard";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });

describe("Project tests", () => {
  it("snapshot testing", () => {
    const component = shallow(
      <ProjectCard title={"HELLO"} technology={"HIII"} />
    );
    expect(component).toMatchSnapshot();
  });

  it("Title text check", () => {
    const component = shallow(
      <ProjectCard title={"HELLO"} technology={"HIII"} />
    );
    expect(component.find("i").first().text()).toBe("Title -");
  });

  it("Technology text check", () => {
    const component = shallow(
      <ProjectCard title={"HELLO"} technology={"HIII"} />
    );
    expect(component.find("i").at(2).text()).toBe("Technology -");
  });
});
