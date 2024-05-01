import "./Header.css";
import logo from "../../assets/cover.png";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import { useState } from "react";

const Header = () => {
  //   const [active, setActive] = useState("Home");
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
          <Link className="menu_link" to={"/cart"}>
            Cart
          </Link>
        </li>
      </ul>
      <div className="btn_group">
        <button>Login</button>
        {/* <button>Logout</button> */}
      </div>
    </div>
  );
};

export default Header;
