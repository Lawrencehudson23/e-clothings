import React from "react";
import CartIcon from "../CartIcon/CartIcon";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";
// import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartDropDown from "../CartDropDown/CartDropDown";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./Header.styles";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          Log Out
        </OptionLink>
      ) : (
        <OptionLink to="/login">Login</OptionLink>
      )}

      <CartIcon />
    </OptionsContainer>
    {!hidden && <CartDropDown />}
  </HeaderContainer>
);
//NOTE: this naming can be anything but mapStateToProps is standard with redux code bases
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
//connect is a higher component
export default connect(mapStateToProps)(Header);
