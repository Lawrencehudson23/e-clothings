import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/original.svg";
export default function Header() {
  return (
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
      </div>
    </div>
  );
}
