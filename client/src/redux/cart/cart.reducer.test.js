import CartActionTypes from "./cart.types";
import cartReducer, { INITIAL_STATE } from "./cart.reducer";

describe("cartReducer", () => {
  it("should return initial state", () => {
    expect(cartReducer(undefined, INITIAL_STATE)).toEqual(INITIAL_STATE);
  });

  it("should toggle cart hidden with toggleCartHidden action", () => {
    expect(
      cartReducer(INITIAL_STATE, {
        type: CartActionTypes.TOGGLE_CART_HIDDEN,
      }).hidden
    ).toBe(false);
  });

  it("should increase quantity of matching item by 1 if addItem action fired with the same item as payload", () => {
    const mockItem = {
      id: 1,
      quantity: 3,
    };
    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }],
    };
    expect(
      cartReducer(mockPrevState, {
        type: CartActionTypes.ADD_ITEM,
        payload: mockItem,
      }).cartItems[0].quantity
    ).toBe(4);
  });

  it("should decrease quantity of matching item by 1 if removeItem action fired with same item as payload", () => {
    const mockItem = {
      id: 1,
      quantity: 3,
    };
    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }],
    };
    expect(
      cartReducer(mockPrevState, {
        type: CartActionTypes.REMOVE_ITEM,
        payload: mockItem,
      }).cartItems[0].quantity
    ).toBe(2);
  });

  it("should remove item from cart if removeItemFromCart action fired with payload of existing item", () => {
    const mockItem = {
      id: 1,
      quantity: 3,
    };
    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }],
    };
    expect(
      cartReducer(mockPrevState, {
        type: CartActionTypes.CLEAR_ITEM_FROM_CART,
        payload: mockItem,
      }).cartItems.includes((item) => item.id === 1)
    ).toBe(false);
  });

  it("should clear cart if clearCart action fired", () => {
    const mockPrevState = {
      hidden: true,
      cartItems: [
        { id: 1, quantity: 4 },
        { id: 2, quantity: 1 },
      ],
    };
    expect(
      cartReducer(mockPrevState, {
        type: CartActionTypes.CLEAR_CART,
      }).cartItems.length
    ).toBe(0);
  });
});
