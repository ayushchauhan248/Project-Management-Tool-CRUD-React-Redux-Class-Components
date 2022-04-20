import React from "react";
import AllCardSection from "./AllCardSection";
import { shallow, mount, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });

describe("All Card Section tests", () => {
  it("snapshot testing", () => {
    const component = shallow(
      <AllCardSection
        projects={[
          {
            _id: "6246784888b2ac673d77f759",
            title: "TODO APP",
            technology: "Python flask",
            deadline: "1 may",
            description: "create ",
          },
          {
            _id: "6246786688b2ac673d77f75f",
            title: "Keep Notes",
            technology: "React Native",
            deadline: "15 April",
            description: "create a todo type app for keeping notes",
          },
        ]}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it("test checking ", () => {
    const component = shallow(
      <AllCardSection
        projects={[
          {
            _id: "6246784888b2ac673d77f759",
            title: "TODO APP",
            technology: "Python flask",
            deadline: "1 may",
            description: "create ",
          },
          {
            _id: "6246786688b2ac673d77f75f",
            title: "Keep Notes",
            technology: "React Native",
            deadline: "15 April",
            description: "create a todo type app for keeping notes",
          },
        ]}
      />
    );
    expect(component.find("#head").text()).toEqual("ALL PROJECTS");
  });
});
