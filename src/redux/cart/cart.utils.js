//NOTE: utility functions allow us to keep our files clean and organize functions that we may need in multiple files in one location
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }
  //NOTE: quantity property gets attached the first item around since this if block won't run when it's a new item!
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
