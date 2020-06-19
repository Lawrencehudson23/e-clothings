import React from "react";
import { shallow } from "enzyme";
import CustomButton from "./CustomButton";

it("should render CustomButton component", () => {
  expect(shallow(<CustomButton />).debug()).toMatchSnapshot();
});
