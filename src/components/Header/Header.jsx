import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon/CartIcon";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartDropDown from "../CartDropDown/CartDropDown";
const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Log Out
        </div>
      ) : (
        <Link className="option" to="/login">
          Login
        </Link>
      )}

      <CartIcon />
    </div>
    {!hidden && <CartDropDown />}
  </div>
);
//NOTE: this naming can be anything but mapStateToProps is standard with redux code bases
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});
//connect is a higher component
export default connect(mapStateToProps)(Header);
