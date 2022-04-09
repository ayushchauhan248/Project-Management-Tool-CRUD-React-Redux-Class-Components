// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { shallow } from "enzyme";
import React from "react";
import App from "./App";

it("should render not found page", () => {
  const component = shallow(<App />);
  const NotFoundPageComp = component.find("NotFoundPage").exists();
  expect(NotFoundPageComp).toBe(true);
});
