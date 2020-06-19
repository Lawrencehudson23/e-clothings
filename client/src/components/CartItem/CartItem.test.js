import React from "react";
import { shallow } from "enzyme";
import CartItem from "./CartItem";

it("should render CartItem component", () => {
  const mockItem = {
    imageUrl: "www.testImage.com",
    name: "hats",
    price: 10,
    quantity: 2,
  };
  expect(shallow(<CartItem item={mockItem} />).debug()).toMatchSnapshot();
});
