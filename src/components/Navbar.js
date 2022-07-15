import React from "react";
import { useSelector } from "react-redux";
import HappayLogo from "../assets/icons/happayLogo.png";
import CartIcon from "../assets/icons/cart_icon.png";
import UserIcon from "../assets/icons/user.png";

const Navbar = ({ navigate }) => {
  const myState = useSelector((state) => state.quantityHandler);
  // calcualte total cart quantity
  const qty = myState.cart.reduce((prev, next) => {
    return prev + next.qty;
  }, 0);

  return (
    <div className="navbar">
      <div className="navbar-lhs" onClick={() => navigate("/redux-cart/Home")}>
        <img alt="logo" src={HappayLogo} />
      </div>
      <div className="navbar-rhs">
        <div
          className="cart-icon-div"
          onClick={() => navigate("/redux-cart/Cart")}
        >
          <img className="cart-icon" alt="cart" src={CartIcon} />
          <span className="cart-num">{qty}</span>
        </div>
        <img alt="profile" src={UserIcon} className="user-icon" />
      </div>
    </div>
  );
};

export default Navbar;
