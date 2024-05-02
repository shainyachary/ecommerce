import "./Product.css";
import { MdCurrencyRupee } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../ProductContext/ProductContext";

const Product = ({ id, name, image, price }) => {
  const { addToCart } = useContext(ProductContext);
  return (
    <div className="product_container">
      <div className="wrapper">
        <div className="img_box position-relative">
          <Link to={`/${id}`}>
            <img src={image} alt={id} />
          </Link>
          <span className="wish_btn">
            <CiHeart />
          </span>
          <button className="add_btn" onClick={() => addToCart(id)}>
            <span>
              <IoCartOutline />
            </span>{" "}
            Add To Cart
          </button>
        </div>
        <div className="product_price d-flex align-items-center">
          <MdCurrencyRupee />
          <span>{price}</span>
        </div>
        <div className="product_name">{name}</div>
      </div>
    </div>
  );
};

export default Product;
