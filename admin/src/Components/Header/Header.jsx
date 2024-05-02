import "./Header.css";
import logo from "../../assets/cover.png";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Header = () => {
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
            Add Products
          </Link>
        </li>
        <li>
          <Link className="menu_link" to={"/allproduct"}>
            List Products
          </Link>
        </li>
      </ul>
      <div className="btn_group">
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Header;
