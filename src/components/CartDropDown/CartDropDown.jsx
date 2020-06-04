import React from "react";
import "./CartDropDown.scss";
import CustomButton from "../CustomButton/CustomButton";
const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
);

export default CartDropDown;
