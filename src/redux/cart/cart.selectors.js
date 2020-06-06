import { createSelector } from "reselect";
import { connectAdvanced } from "react-redux";
//NOTE: INPUT SELECTOR
const selectCart = (state) => state.cart;
//output selector

export const selectCartItems = createSelector([selectCart], (cart) => {
  console.log("cart==>>>>>", cart);
  console.log("cart.cartItems==>>>>>", cart.items);

  return cart.cartItems;
});

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    console.log("cartItems==>", cartItems);
    return cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    );
  }
);
export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    console.log("second cartItems", cartItems);

    return cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity * cartItem.price,
      0
    );
  }
);
