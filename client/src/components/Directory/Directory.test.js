import React from "react";
import { shallow } from "enzyme";
import Directory from "./Directory";

it.skip("should render Directory component", () => {
  const mockStore = {};
  expect(shallow(<Directory sections={mockStore} />).debug()).toMatchSnapshot();
});
