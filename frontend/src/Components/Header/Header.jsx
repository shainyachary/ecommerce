import "./Header.css";
import logo from "../../assets/cover.png";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { ProductContext } from "../../ProductContext/ProductContext";
import { useContext } from "react";
// import { useState } from "react";

const Header = () => {
  const { getCartItems } = useContext(ProductContext);
  return (
    <div className="header">
      <div className="logo_container">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="menu_bar_container">
        <HiOutlineMenuAlt3 className="menu_bar" />
      </div>
      <ul className="menu_items">
        <li>
          <Link className="menu_link" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="menu_link" to={"/shop"}>
            Shop
          </Link>
        </li>
        <li>
          <Link className="menu_link position-relative" to={"/cart"}>
            Cart<span className="cart_count">{getCartItems()}</span>
          </Link>
        </li>
      </ul>
      <div className="btn_group">
        {localStorage.getItem("auth-token") ? (
          <Link
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
            to={"/logout"}
            className="login_btn"
          >
            <button>Logout</button>
          </Link>
        ) : (
          <Link to={"/login"} className="login_btn">
            <button>Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
