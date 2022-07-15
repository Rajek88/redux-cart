import React from "react";
import HappayLogo from "../assets/icons/happayLogo.png";
import CartIcon from "../assets/icons/cart_icon.png";
import UserIcon from "../assets/icons/user.png";

const Navbar = ({ navigate }) => {
  return (
    <div className="navbar">
      <div className="navbar-lhs" onClick={() => navigate("/")}>
        <img alt="logo" src={HappayLogo} />
      </div>
      <div className="navbar-rhs">
        <div className="cart-icon-div" onClick={() => navigate("/Cart")}>
          <img className="cart-icon" alt="cart" src={CartIcon} />
          <span className="cart-num">5</span>
        </div>
        <img alt="profile" src={UserIcon} className="user-icon" />
      </div>
    </div>
  );
};

export default Navbar;
