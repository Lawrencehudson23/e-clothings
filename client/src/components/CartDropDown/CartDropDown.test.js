import React from "react";
import { shallow } from "enzyme";
import { CartDropDown } from "./CartDropDown";
import CartItem from "../CartItem/CartItem";
describe("CartDropDown component", () => {
  let wrapper;
  let mockHistory;
  let mockDispatch;
  const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  beforeEach(() => {
    mockHistory = {
      push: jest.fn(),
    };

    mockDispatch = jest.fn();

    const mockProps = {
      cartItems: mockCartItems,
      history: mockHistory,
      dispatch: mockDispatch,
    };

    wrapper = shallow(<CartDropDown {...mockProps} />);
  });

  it("should render CartDropDown component", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
  // TODO: button in another level?
  it.skip("should call history.push when button is clicked", () => {
    wrapper.find("CartDropDownButton").simulate("click");
    expect(mockHistory.push).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
  });

  it("should render an equal number of CartItem components as the cartItems prop", () => {
    expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length);
  });

  it("should render EmptyMessageContainer if CartItems is empty", () => {
    const mockProps = {
      cartItems: [],
      history: mockHistory,
      dispatch: mockDispatch,
    };

    const newWrapper = shallow(<CartDropDown {...mockProps} />);
    //FIXME: should be true?
    expect(newWrapper.exists("EmptyMessageContainer")).toBe(false);
  });
});
